import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { AppError } from "../errors/AppError";

interface IUpdateUserAccountUseCaseRequest {
  id: string;
  completename: string;
  username: string;
  email: string;
  password: string;
}

export class UpdateUserAccountUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute({
    id,
    completename,
    username,
    email,
    password,
  }: IUpdateUserAccountUseCaseRequest): Promise<User> {
    const checkUserID = await this.userAccountRepository.findById(id);

    if (checkUserID === null) {
      throw new AppError("ID does not exist!");
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

    const updateUser = await this.userAccountRepository.update({
      id,
      completename,
      username,
      email,
      password,
    });

    return updateUser;
  }
}
