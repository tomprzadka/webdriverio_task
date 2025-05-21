import { LoginUser } from '../models/user.model';

export const testUser: LoginUser = {
  username: process.env.USERNAME ?? '[NOT_SET]',
  password: process.env.PASSWORD ?? '[NOT_SET]',
};
