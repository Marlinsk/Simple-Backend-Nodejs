import { User } from "@entities/User";
import { AppError } from "@errors/AppError";
import { UserAccountRepository } from "@repositories/user-account-repository";
import { NOT_FOUND } from "src/constants/http-status";

type Output = {
  userProfile: User;
}

export class FindByIDUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(id: string): Promise<Output | null> {
    const userAlreadyExists = await this.userAccountRepository.findById(id);
    
    if (!userAlreadyExists) { 
      throw new AppError("ID does not exist!", NOT_FOUND); 
    }
    
    const user = await this.userAccountRepository.findById(id);
    
    return { userProfile: user };
  }
}
