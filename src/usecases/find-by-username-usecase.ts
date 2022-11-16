import { UserEntity } from "../entities/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { NotFoundError } from "../errors/AppError";

export class FindByUsernameUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) { }

  async execute(username: string): Promise<UserEntity | null> {
    const checkUsernameExists = await this.userAccountRepository.findByUsername(
      username
    );

    if (checkUsernameExists === null) {
      throw new NotFoundError("Username does not exist!");
    }

    const user = await this.userAccountRepository.findByUsername(username);
    return user;
  }
}
