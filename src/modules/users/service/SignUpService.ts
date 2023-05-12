import { IUserRepository } from '../repo/IUserRepository';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { User } from '../domain/User';
import { Username } from '../domain/Username';
import { UserEmail } from '../domain/UserEmail';
import { UserPassword } from '../domain/UserPassword';

export class SignUpService {
  private userRepo: IUserRepository;

  constructor(userRepo: IUserRepository) {
    this.userRepo = userRepo;
  }

  async createUser(userDTO: CreateUserDTO): Promise<any> {
    const { username, email, password } = userDTO;

    if (!this.validateUser(username, email)) {
      throw Error('Invalid username or email');
    }
    const userPassword = new UserPassword(password);
    const hashedPassword = await userPassword.hashPassword();


    const user = new User({
      username, email, password: hashedPassword
    });

    await this.userRepo.save(user);
  }

  private validateUser(username: string, email: string) {
    const validateUsername = new Username(username).validate();
    const validateEmail = new UserEmail(email).validate();
    return validateEmail && validateUsername;
  }
}