import { compare } from "bcrypt";
import { RefreshToken } from "@prisma/client";
import { AppError } from "@errors/AppError";
import { prisma } from "@prisma-client/PrismaClient";
import { UserAccountRepository } from "@repositories/user-account-repository";
import { CredentialsLoginDTO } from "@dtos/CredentialsLoginDTO";
import { GenerateRefreshToken } from "@providers/GenerateRefreshTokenProvider";
import { GenereateTokenProvider } from "@providers/GenereateTokenProvider";
import { BAD_REQUEST } from "src/constants/http-status";

type Output = {
  token: string;
  refresh_token: RefreshToken;
}

export class AuthenticateUseCase {
  constructor(private userAccountRepository: UserAccountRepository) {}

  async execute({ email, password }: CredentialsLoginDTO): Promise<Output> {
    const userAlreadyExists = await this.userAccountRepository.findByEmail(email);
    
    if (!userAlreadyExists) { 
      throw new AppError("Email or password is incorrect", BAD_REQUEST); 
    }
    
    const passwordMatch = await compare(password , userAlreadyExists.password);
    
    if (!passwordMatch) { 
      throw new AppError("Email or password is incorrect", BAD_REQUEST); 
    }
    
    const generateTokenProvider = new GenereateTokenProvider();
    const token = await generateTokenProvider.execute(userAlreadyExists.id);

    await prisma.refreshToken.deleteMany({ where: { userId: userAlreadyExists.id }});

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id);

    return { 
      token: token, 
      refresh_token: refreshToken
    }
  }
}
