import { UserEntity } from "../entities/User";
import { UserAccountRepository } from "../repositories/user-account-repository";
import { NotFoundError } from "../errors/AppError";

export class FindByUsernameUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(username: string): Promise<UserEntity | null> {
    const userAlreadyExists = await this.userAccountRepository.findByUsername(
      username
    );

    if (!userAlreadyExists) {
      throw new NotFoundError("Username does not exist!");
    }

    const user = await this.userAccountRepository.findByUsername(username);
    return user;
  }
}
