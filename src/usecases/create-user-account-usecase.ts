import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { AppError } from "../infra/shared/errors/AppError";

interface ICreateUserAccountUseCaseRequest {
  completename: string;
  username: string;
  email: string;
  password: string;
}

export class CreateUserAccountUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute({
    completename,
    username,
    email,
    password,
  }: ICreateUserAccountUseCaseRequest): Promise<User> {
    if (!username) {
      throw new AppError("Username cannot be empty!");
    }

    if (!email) {
      throw new AppError("Email cannot be empty!");
    }

    if (!password) {
      throw new AppError("Password cannot be empty!");
    }

    const checkUsernameExists = await this.userAccountRepository.findByUsername(
      username
    );

    const checkEmailExists = await this.userAccountRepository.findByEmail(
      email
    );

    if (checkUsernameExists) {
      throw new AppError("This username is already in use!");
    }

    if (checkEmailExists) {
      throw new AppError("This email is already in use!");
    }

    const createUser = await this.userAccountRepository.create({
      completename,
      username,
      email,
      password,
    });

    return createUser;
  }
}
