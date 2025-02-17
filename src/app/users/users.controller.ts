import {
  BadRequestException,
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post(':userId/balance')
  async updateBalance(
    @Param('userId', ParseIntPipe) userId: number,
    @Body('amount') amount: number,
  ) {
    if (typeof userId !== 'number' || typeof amount !== 'number') {
      throw new BadRequestException('Invalid request');
    }
    return this.userService.updateBalance(userId, amount);
  }
}
