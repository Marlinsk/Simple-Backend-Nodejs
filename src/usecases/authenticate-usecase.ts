import { BadRequestError } from "../errors/AppError";
import { UserAccountRepository } from "../repositories/user-account-repository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import "dotenv/config";
import authConfig from "../config/auth";

interface UserResponse {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: UserResponse;
  token: string;
}

export class AuthenticateUseCase {
  constructor(private userAccountRepository: UserAccountRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const userAlreadyExists = await this.userAccountRepository.findByEmail(email);

    if (!userAlreadyExists) {
      throw new BadRequestError("Email or password incorrect");
    }

    const passwordMatch = await compare(password , userAlreadyExists.password);

    if (!passwordMatch) {
      throw new BadRequestError("Email or password incorrect");
    }

    const { expiresIn, secret } = authConfig.jwt;

    if (!secret) {
      throw new BadRequestError("Secret is not defined on the configuration.");
    }

    const token = sign({}, secret, {
      subject: userAlreadyExists.id,
      expiresIn,
    })

    return { 
      token: token, 
      user: {
        id: userAlreadyExists.id,
        name: userAlreadyExists.completename,
        username: userAlreadyExists.username,
        email: userAlreadyExists.email,
      }, 
    }
  }
}