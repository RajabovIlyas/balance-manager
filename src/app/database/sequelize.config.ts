import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { SequelizeOptions } from 'sequelize-typescript';

export const CONNECT_CONFIG: SequelizeOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_NAME ?? 'balance_manager',
  models: [User],
};

export const sequelize = new Sequelize(CONNECT_CONFIG);
