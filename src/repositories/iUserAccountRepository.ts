import { User } from "../domain/entity/User";
import { ICreateUserAccountDTO } from "../dto/iCreateUserAccountDTO";

export interface IUserAccountRepository {
  create(data: ICreateUserAccountDTO): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
  findAllUsers(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
