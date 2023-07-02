import { User } from "../entities/User";
import { ICreateUserAccountDTO } from "../dtos/iCreateUserAccountDTO";
import { IUpdateUserAccountDTO } from "../dtos/iUpdateUserAccountDTO";

export interface UserAccountRepository {
  findAllUsers(): Promise<Pick<User, 'id' | 'completename' | 'username' | 'email'>[] | null>;
  findById(id: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: ICreateUserAccountDTO): Promise<User>;
  update(data: IUpdateUserAccountDTO): Promise<User>;
  delete(id: string): Promise<void>;
}
