import { User } from "../entities/User";
import { UserAccountRepository } from "../repositories/user-account-repository";
import { NotFoundError } from "../errors/AppError";

export class FindByIDUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(id: string): Promise<User | null> {
    const userAlreadyExists = await this.userAccountRepository.findById(id);

    if (!userAlreadyExists) {
      throw new NotFoundError("ID does not exist!");
    }
    const user = await this.userAccountRepository.findById(id);

    return user;
  }
}
