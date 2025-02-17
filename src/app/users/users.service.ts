import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_PROVIDER') private usersRepo: typeof User) {}

  async updateBalance(userId: number, amount: number) {
    const t = await this.usersRepo.sequelize.transaction();

    try {
      const foundUser = await this.usersRepo.findOne({
        where: { id: userId },
        lock: true,
        transaction: t,
      });
      if (!foundUser) {
        throw new NotFoundException('User not found');
      }
      const newBalance = foundUser.balance + amount;
      if (newBalance < 0) {
        throw new BadRequestException('Balance should not be less than 0');
      }
      foundUser.balance = newBalance;

      await foundUser.save({ transaction: t });
      await t.commit();
      return foundUser;
    } catch (e) {
      await t.rollback();
      throw e;
    }
  }
}
