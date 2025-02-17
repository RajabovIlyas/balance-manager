import { Column, Model, Table } from 'sequelize-typescript';

@Table({ modelName: 'users' })
export class User extends Model<User> {
  @Column
  balance: number;
}
