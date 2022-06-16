import { User } from "@prisma/client";

export class UserEntity implements User {
  readonly id: string;
  completename: string;
  username: string;
  email: string;
  password: string;
}
