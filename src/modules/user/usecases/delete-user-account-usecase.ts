import { IUserAccountRepository } from "../repositories/iUserAccountRepository";

export class DeleteUserAccountUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(id: string) {
    // const checkUserID = await this.userAccountRepository.findById(id);

    // if (!checkUserID) {
    // }

    await this.userAccountRepository.delete(id);
  }
}
