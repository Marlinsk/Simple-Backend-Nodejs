import { User } from "../entities/User";
import { UserAccountRepository } from "../repositories/user-account-repository";

export class FindAllUsersUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(): Promise<Pick<User, 'id' | 'completename' | 'username' | 'email'>[] | null> {
    const users = await this.userAccountRepository.findAllUsers();
    return users;
  }
}
