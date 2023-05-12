export class Username {
  private username: string;

  constructor(username: string) {
    this.username = username;

  }

  public validate() {
    return true;
  }
}