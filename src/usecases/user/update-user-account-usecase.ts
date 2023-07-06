import { hash } from "bcrypt";
import { User } from "@entities/User";
import { NotFoundError } from "@errors/AppError";
import { UserAccountRepository } from "@repositories/user-account-repository";
import { UpdateUserAccountDTO } from "@dtos/UpdateUserAccountDTO";

type UpdateUserAccountUseCaseResponse = {
  userProfile: User;
}

export class UpdateUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute({ id, name, username, email, password }: UpdateUserAccountDTO): Promise<UpdateUserAccountUseCaseResponse> {
    const userAlreadyExists = await this.userAccountRepository.findById(id);

    if (!userAlreadyExists) {
      throw new NotFoundError("ID does not exist!");
    }

    const passwordHash = await hash(password, 8);

    const updatedUser = await this.userAccountRepository.update({
      id,
      name,
      username,
      email,
      password: passwordHash,
    });

    return { userProfile: updatedUser };
  }
}
