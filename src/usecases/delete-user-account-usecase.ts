import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { NotFoundError } from "../errors/AppError";

export class DeleteUserAccountUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) { }

  async execute(id: string) {
    const checkUserID = await this.userAccountRepository.findById(id);

    if (checkUserID === null) {
      throw new NotFoundError("ID does not exist in the database!");
    }

    await this.userAccountRepository.delete(id);
  }
}
