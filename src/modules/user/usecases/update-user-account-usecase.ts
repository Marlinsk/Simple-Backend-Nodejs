import { User } from "../../../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";

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
    // const checkUserID = await this.userAccountRepository.findById(id);

    // if (!checkUserID) {
    // }

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
