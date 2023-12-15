import { hash } from "bcrypt";
import { User } from "@entities/User";
import { AppError } from "@errors/AppError";
import { CreateUserAccountDTO } from "@dtos/CreateUserAccountDTO";
import { UserAccountRepository } from "@repositories/user-account-repository";
import { BAD_REQUEST } from "src/constants/http-status";

type Output = {
  result: User;
}

export class CreateUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute(data: CreateUserAccountDTO): Promise<Output> {
    const { name, username, email, password } = data;

    const checkUsernameExists = await this.userAccountRepository.findByUsername(username);
    const checkEmailExists = await this.userAccountRepository.findByEmail(email);
    
    if (checkUsernameExists) { 
      throw new AppError("This username is already in use!", BAD_REQUEST); 
    }
    
    if (checkEmailExists) { 
      throw new AppError("This email is already in use!", BAD_REQUEST); 
    }
    
    const passwordHash = await hash(password, 8);
    
    const newUser = await this.userAccountRepository.create({ 
      name, 
      username, 
      email, 
      password: passwordHash 
    });
    
    return { result: newUser };
  }
}
