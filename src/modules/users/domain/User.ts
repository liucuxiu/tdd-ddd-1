import { UserPassword } from './UserPassword';
import { Username } from './Username';
import { UserEmail } from './UserEmail';
import { UserId } from './UserId';

export class User {
  private userId: UserId;
  private password: UserPassword;
  private username: Username;
  private userEmail: UserEmail;

  constructor(prop: any) {
    this.userId = new UserId();
    this.username = prop.username;
    this.userEmail = prop.email;
    this.password = prop.password;
  }

  getUserId(): UserId {
    return this.userId;
  }

  getPassword(): UserPassword {
    return this.password;
  }

  getUsername(): Username {
    return this.username;
  }

  getUserEmail(): UserEmail {
    return this.userEmail;
  }


}