import { hash } from "bcrypt";
import { User } from "@entities/User";
import { BadRequestError } from "@errors/AppError";
import { CreateUserAccountDTO } from "@dtos/CreateUserAccountDTO";
import { UserAccountRepository } from "@repositories/user-account-repository";

type CreateUserAccountUseCaseResponse = {
  userProfile: User;
}

export class CreateUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute({ name, username, email, password }: CreateUserAccountDTO): Promise<CreateUserAccountUseCaseResponse> {
    const checkUsernameExists = await this.userAccountRepository.findByUsername(username);
    const checkEmailExists = await this.userAccountRepository.findByEmail(email);

    if (checkUsernameExists) {
      throw new BadRequestError("This username is already in use!");
    }

    if (checkEmailExists) {
      throw new BadRequestError("This email is already in use!");
    }

    const passwordHash = await hash(password, 8);

    const createUser = await this.userAccountRepository.create({
      name,
      username,
      email,
      password: passwordHash,
    });

    return { userProfile: createUser };
  }
}
