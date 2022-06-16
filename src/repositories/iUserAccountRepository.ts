import { UserEntity } from "../domain/User";
import { ICreateUserAccountDTO } from "../dto/iCreateUserAccountDTO";
import { IUpdateUserAccountDTO } from "../dto/iUpdateUserAccountDTO";

export interface IUserAccountRepository {
  create(data: ICreateUserAccountDTO): Promise<UserEntity>;
  update(data: IUpdateUserAccountDTO): Promise<UserEntity>;
  delete(id: string): Promise<void>;
  findAllUsers(): Promise<UserEntity[]>;
  findById(id: string): Promise<UserEntity | null>;
  findByUsername(username: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
}
