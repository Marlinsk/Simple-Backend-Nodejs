import { UserEntity } from "../entities/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { NotFoundError } from "../errors/AppError";

export class FindAllUsersUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) { }

  async execute(): Promise<UserEntity[]> {
    const findAllUsers = await this.userAccountRepository.findAllUsers();
    if (findAllUsers.length === 0) {
      throw new NotFoundError("No data found!");
    }

    return findAllUsers;
  }
}
