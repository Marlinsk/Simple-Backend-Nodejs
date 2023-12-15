import { hash } from "bcrypt";
import { User } from "@entities/User";
import { AppError } from "@errors/AppError";
import { UserAccountRepository } from "@repositories/user-account-repository";
import { UpdateUserAccountDTO } from "@dtos/UpdateUserAccountDTO";
import { NOT_FOUND } from "src/constants/http-status";

type Output = {
  profile: User;
}

export class UpdateUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(data: UpdateUserAccountDTO): Promise<Output> {
    const { id, name, username, email, password } = data;
    
    const userAlreadyExists = await this.userAccountRepository.findById(id);
    
    if (!userAlreadyExists) { 
      throw new AppError("ID does not exist!", NOT_FOUND); 
    }
    
    const passwordHash = await hash(password, 8);
    
    const updatedUser = await this.userAccountRepository.update({ 
      id, 
      name, 
      username, 
      email, 
      password: passwordHash 
    });
    
    return { profile: updatedUser };
  }
}
