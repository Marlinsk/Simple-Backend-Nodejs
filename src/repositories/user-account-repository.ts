import { User } from "@entities/User";
import { CreateUserAccountDTO } from "@dtos/CreateUserAccountDTO";
import { UpdateUserAccountDTO } from "@dtos/UpdateUserAccountDTO";
import { UserAccountResponseDTO } from "@dtos/UserAccountResponseDTO";

export interface UserAccountRepository {
  findAll(): Promise<UserAccountResponseDTO[] | null>;
  findById(id: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: CreateUserAccountDTO): Promise<User>;
  update(data: UpdateUserAccountDTO): Promise<User>;
  delete(id: string): Promise<void>;
}
