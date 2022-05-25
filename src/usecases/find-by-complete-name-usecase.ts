import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";

export class FindByCompleteNameUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(completename: string) {
    const user = await this.userAccountRepository.findByCompleteName(
      completename
    );
    return user;
  }
}
