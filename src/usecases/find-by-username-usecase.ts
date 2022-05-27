import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { AppError } from "../infra/shared/errors/AppError";

export class FindByUsernameUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(username: string): Promise<User | null> {
    const checkUsernameExists = await this.userAccountRepository.findByUsername(
      username
    );

    if (checkUsernameExists === null) {
      throw new AppError("Username does not exist!");
    }

    const user = await this.userAccountRepository.findByUsername(username);
    return user;
  }
}
