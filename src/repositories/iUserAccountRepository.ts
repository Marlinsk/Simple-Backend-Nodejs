import { UserEntity } from "../domain/entity/User";
import { ICreateUserAccountDTO } from "../dto/iCreateUserAccountDTO";

export interface IUserAccountRepository {
  create(data: ICreateUserAccountDTO): Promise<UserEntity>;
  update(user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<void>;
  findAllUsers(): Promise<UserEntity[]>;
  findById(id: string): Promise<UserEntity | null>;
  findByUsername(username: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
}
