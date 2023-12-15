import { User } from "@entities/User";
import { UserAccountRepository } from "@repositories/user-account-repository";

type FindAllUsersUseCaseResponse = {
  profiles: Pick<User, 'id' | 'name' | 'username' | 'email'>[]
}

export class FindAllUsersUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(): Promise<FindAllUsersUseCaseResponse | null> {
    const users = await this.userAccountRepository.findAll();
    return { profiles: users };
  }
}
