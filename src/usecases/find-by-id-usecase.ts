import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";

export class FindByIDUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(id: string) {
    // const checkUserID = await this.userAccountRepository.findById(id);

    // if (!checkUserID) {
    // }
    const user = await this.userAccountRepository.findById(id);

    return user;
  }
}
