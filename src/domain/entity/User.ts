export class User {
  public readonly id: string;

  public completename: string;
  public username: string;
  public email: string;
  public password: string;

  constructor(
    id: string,
    completename: string,
    username: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.completename = completename;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
