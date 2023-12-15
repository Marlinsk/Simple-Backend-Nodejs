import { User } from "@entities/User";
import { NotFoundError } from "@errors/AppError";
import { UserAccountRepository } from "@repositories/user-account-repository";

type FindByIDUseCaseResponse = {
  userProfile: User;
}

export class FindByIDUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(id: string): Promise<FindByIDUseCaseResponse | null> {
    const userAlreadyExists = await this.userAccountRepository.findById(id);

    if (!userAlreadyExists) {
      throw new NotFoundError("ID does not exist!");
    }
    const user = await this.userAccountRepository.findById(id);

    return { userProfile: user };
  }
}
