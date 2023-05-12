import bcrypt from 'bcryptjs';

export class UserPassword {
  private readonly hashed: string;

  constructor(password: string) {
    this.hashed = password;
  }

  get password() {
    return this.hashed;
  }


  public async hashPassword(): Promise<string> {
    return await bcrypt.hash(this.hashed, 10);
  }

}