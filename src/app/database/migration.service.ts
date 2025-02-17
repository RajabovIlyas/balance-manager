import { SequelizeStorage, Umzug } from 'umzug';
import createUsersTable from './migrations/create-users-table';
import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class MigrationService {
  private umzug: Umzug;

  constructor(@Inject('SEQUELIZE') private sequelize: Sequelize) {
    this.umzug = new Umzug({
      migrations: [createUsersTable],
      storage: new SequelizeStorage({
        sequelize: sequelize,
        modelName: 'SequelizeMeta',
      }),
      context: sequelize.getQueryInterface(),
      logger: console,
    });
  }

  async up() {
    await this.umzug.up();
  }
}
