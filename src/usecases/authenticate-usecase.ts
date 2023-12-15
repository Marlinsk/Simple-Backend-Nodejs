import { compare } from "bcrypt";
import { User } from "@entities/User";
import { RefreshToken } from "@prisma/client";
import { BadRequestError } from "@errors/AppError";
import { prisma } from "@prisma-client/PrismaClient";
import { UserAccountRepository } from "@repositories/user-account-repository";
import { CredentialsLoginDTO } from "@dtos/CredentialsLoginDTO";
import { GenerateRefreshToken } from "@providers/GenerateRefreshToken";
import { GenereateTokenProvider } from "@providers/GenereateTokenProvider";

type AuthenticateUseCaseResponse = {
  token: string;
  refresh_token: RefreshToken;
  user: Pick<User, 'id' | 'name' | 'username' | 'email'>;
}

export class AuthenticateUseCase {
  constructor(private userAccountRepository: UserAccountRepository) {}

  async execute({ email, password }: CredentialsLoginDTO): Promise<AuthenticateUseCaseResponse> {
    const userAlreadyExists = await this.userAccountRepository.findByEmail(email);

    if (!userAlreadyExists) {
      throw new BadRequestError("Email or password is incorrect");
    }

    const passwordMatch = await compare(password , userAlreadyExists.password);

    if (!passwordMatch) {
      throw new BadRequestError("Email or password is incorrect");
    }
    
    const generateTokenProvider = new GenereateTokenProvider();
    const token = await generateTokenProvider.execute(userAlreadyExists.id);

    await prisma.refreshToken.deleteMany({
      where: {
        userId: userAlreadyExists.id,
      }
    });

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id);

    return { 
      token: token, 
      refresh_token: refreshToken, 
      user: userAlreadyExists 
    }
  }
}
