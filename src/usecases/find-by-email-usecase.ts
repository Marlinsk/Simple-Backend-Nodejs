import { User } from "../domain/entity/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { AppError } from "../infra/shared/errors/AppError";

export class FindByEmailUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) {}

  async execute(email: string): Promise<User | null> {
    const checkEmailExists = await this.userAccountRepository.findByEmail(
      email
    );

    if (checkEmailExists === null) {
      throw new AppError("Email does not exist!");
    }

    const user = await this.userAccountRepository.findByEmail(email);
    return user;
  }
}
