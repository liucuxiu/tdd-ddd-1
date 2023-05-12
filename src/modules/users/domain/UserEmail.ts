export class UserEmail {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  public validate() {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.email ? reg.test(this.email) : false;
  }
}