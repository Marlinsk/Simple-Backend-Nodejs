import { UserEntity } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { AppError } from "../errors/AppError";

export class FindAllUsersUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(): Promise<UserEntity[]> {
    const findAllUsers = await this.userAccountRepository.findAllUsers();
    if (findAllUsers.length === 0) {
      throw new AppError("No data found!");
    }

    return findAllUsers;
  }
}
