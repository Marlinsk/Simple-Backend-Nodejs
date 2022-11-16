import { UserEntity } from "../entities/User";
import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { NotFoundError } from "../errors/AppError";

export class FindByIDUseCase {
  constructor(private userAccountRepository: IUserAccountRepository) { }

  async execute(id: string): Promise<UserEntity | null> {
    const checkUserID = await this.userAccountRepository.findById(id);

    if (checkUserID === null) {
      throw new NotFoundError("ID does not exist!");
    }
    const user = await this.userAccountRepository.findById(id);

    return user;
  }
}
