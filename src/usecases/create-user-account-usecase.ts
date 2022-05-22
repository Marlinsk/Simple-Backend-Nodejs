import { IUserAccountRepository } from "../modules/user/repositories/iUserAccountRepository";

interface ICreateUserAccountUseCaseRequest {
  completename?: string;
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
  }: ICreateUserAccountUseCaseRequest) {
    // const checkUsernameExists = await this.userAccountRepository.findByUsername(
    //   username
    // );

    // const checkEmailExists = await this.userAccountRepository.findByEmail(
    //   email
    // );

    // if (checkUsernameExists) {
    // }

    // if (checkEmailExists) {
    // }

    await this.userAccountRepository.create({
      completename,
      username,
      email,
      password,
    });
  }
}
