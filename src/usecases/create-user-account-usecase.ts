import { IUserAccountRepository } from "../repositories/iUserAccountRepository";
import { BadRequestError } from "../errors/AppError";
import { hash } from "bcrypt";
import { UserEntity } from "../entities/User";
import { MailAdapter } from "../adapters/mail-adapter";

interface IRequest {
  completename: string;
  username: string;
  email: string;
  password: string;
}

export class CreateUserAccountUseCase {
  constructor(
    private userAccountRepository: IUserAccountRepository,
    private mailAdapter: MailAdapter
  ) { }

  async execute({
    completename,
    username,
    email,
    password,
  }: IRequest): Promise<UserEntity> {
    if (!username) {
      throw new BadRequestError("Username cannot be empty!");
    }

    if (!email) {
      throw new BadRequestError("Email cannot be empty!");
    }

    if (!password) {
      throw new BadRequestError("Password cannot be empty!");
    }

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

    await this.mailAdapter.sendMail({
      subject: "Usuário Cadastrado",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #000;">`,
        `<p>Perfeito!</p>`,
        `<p>Usuário foi cadastrado com sucesso no banco de dados.</p>`,
        `</div>`,
      ].join("\n"),
    });

    return createUser;
  }
}
