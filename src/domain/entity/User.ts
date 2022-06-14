import { User } from "@prisma/client";

export class UserEntity implements User {
  id: string;
  completename: string;
  username: string;
  email: string;
  password: string;
}
