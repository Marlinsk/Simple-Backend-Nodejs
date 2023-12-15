import { AppError } from "@errors/AppError";
import { UserAccountRepository } from "@repositories/user-account-repository";
import { NOT_FOUND } from "src/constants/http-status";

export class DeleteUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(id: string): Promise<void> {
    const userAlreadyExists = await this.userAccountRepository.findById(id);
    
    if (!userAlreadyExists) { 
      throw new AppError("ID does not exist in the database!", NOT_FOUND); 
    }
    
    await this.userAccountRepository.delete(id);
  }
}
