import { IUserRepository } from '../IUserRepository';
import { User } from '../../domain/User';
import { UserModel } from '../../model/UserModel';

export class SequelizeUserRepo implements IUserRepository {
  async save(user: User) {
    const persistUser = {
      username: user.getUsername(),
      email: user.getUserEmail(),
      password: user.getPassword()
    };
    await UserModel.create(persistUser);

  }
}