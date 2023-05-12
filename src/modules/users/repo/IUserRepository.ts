import { User } from '../domain/User';

export interface IUserRepository {
  save(user: User): void
}