import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";

export class FindByUsernameUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(username: string) {
    const user = await this.userAccountRepository.findByUsername(username);
    return user;
  }
}
