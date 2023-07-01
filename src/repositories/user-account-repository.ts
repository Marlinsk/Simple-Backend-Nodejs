import { UserEntity } from "../entities/User";
import { ICreateUserAccountDTO } from "../dtos/iCreateUserAccountDTO";
import { IUpdateUserAccountDTO } from "../dtos/iUpdateUserAccountDTO";

export interface UserAccountRepository {
  findAllUsers(): Promise<Pick<UserEntity, 'id' | 'completename' | 'username' | 'email'>[] | null>;
  findById(id: string): Promise<UserEntity | null>;
  findByUsername(username: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  create(data: ICreateUserAccountDTO): Promise<UserEntity>;
  update(data: IUpdateUserAccountDTO): Promise<UserEntity>;
  delete(id: string): Promise<void>;
}
