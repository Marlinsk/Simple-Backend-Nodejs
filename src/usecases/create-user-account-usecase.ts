import { UserAccountRepository } from "../repositories/user-account-repository";
import { BadRequestError } from "../errors/AppError";
import { hash } from "bcrypt";
import { UserEntity } from "../entities/User";

interface IRequest {
  completename: string;
  username: string;
  email: string;
  password: string;
}

export class CreateUserAccountUseCase {
  constructor(private userAccountRepository: UserAccountRepository) { }

  async execute({ completename, username, email, password }: IRequest): Promise<UserEntity> {
    const checkUsernameExists = await this.userAccountRepository.findByUsername(
      username
    );

    const checkEmailExists = await this.userAccountRepository.findByEmail(
      email
    );

    if (checkUsernameExists) {
      throw new BadRequestError("This username is already in use!");
    }

    if (checkEmailExists) {
      throw new BadRequestError("This email is already in use!");
    }

    const passwordHash = await hash(password, 8);

    const createUser = await this.userAccountRepository.create({
      completename,
      username,
      email,
      password: passwordHash,
    });

    return createUser;
  }
}
