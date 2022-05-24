import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";

export class FindAllUsersUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(): Promise<User[]> {
    const findAllUsers = await this.userAccountRepository.findAllUsers();
    return findAllUsers;
  }
}
