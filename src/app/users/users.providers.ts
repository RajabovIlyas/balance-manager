import { User } from './user.entity';

export const usersProviders = [
  {
    provide: 'USER_PROVIDER',
    useValue: User,
  },
];
