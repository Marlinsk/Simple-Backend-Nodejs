import { User } from "../entities/User";
import { UserAccountRepository } from "../repositories/user-account-repository";
import { NotFoundError } from "../errors/AppError";
import { hash } from "bcrypt";

interface IRequest {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export class UpdateUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute({ id, name, username, email, password }: IRequest): Promise<User> {
    const userAlreadyExists = await this.userAccountRepository.findById(id);

    if (!userAlreadyExists) {
      throw new NotFoundError("ID does not exist!");
    }

    const passwordHash = await hash(password, 8);

    const updateUser = await this.userAccountRepository.update({
      id,
      name,
      username,
      email,
      password: passwordHash,
    });

    return updateUser;
  }
}
