import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";

export class FindByEmailUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(email: string) {
    const user = await this.userAccountRepository.findByCompleteName(email);
    return user;
  }
}
