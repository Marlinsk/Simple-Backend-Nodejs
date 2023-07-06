import { NotFoundError } from "@errors/AppError";
import { UserAccountRepository } from "@repositories/user-account-repository";


export class DeleteUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(id: string): Promise<void> {
    const userAlreadyExists = await this.userAccountRepository.findById(id);

    if (!userAlreadyExists) {
      throw new NotFoundError("ID does not exist in the database!");
    }

    await this.userAccountRepository.delete(id);
  }
}
