import { RunnableMigration } from 'umzug';
import { QueryInterface } from 'sequelize';
import { sequelize } from '../sequelize.config';
import { User } from '../../users/user.entity';

const createUsersTable: RunnableMigration<QueryInterface> = {
  name: 'create-users-table',
  up: async () => {
    await sequelize.getRepository(User).create({ balance: 10000 });
  },
};

export default createUsersTable;
