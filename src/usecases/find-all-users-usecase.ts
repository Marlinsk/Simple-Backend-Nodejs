import { UserEntity } from "../entities/User";
import { UserAccountRepository } from "../repositories/user-account-repository";

export class FindAllUsersUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(): Promise<Pick<UserEntity, 'id' | 'completename' | 'username' | 'email'>[] | null> {
    const users = await this.userAccountRepository.findAllUsers();
    return users;
  }
}
