import { sequelize } from './sequelize.config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      await sequelize.sync();
      return sequelize;
    },
  },
];
