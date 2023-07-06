import dayjs from "dayjs";
import { prisma } from "@prisma-client/PrismaClient";
import { UnautorizedError } from "@errors/AppError";
import { GenerateRefreshToken } from "@providers/GenerateRefreshToken";
import { GenereateTokenProvider } from "@providers/GenereateTokenProvider";

export class RefreshTokenUserUseCase {
  async execute(refresh_token: string) {
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: refresh_token
      }
    });

    if(!refreshToken) {
      throw new UnautorizedError("Token is invalid!");
    }

    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));

    const generateTokenProvider = new GenereateTokenProvider();
    const token = await generateTokenProvider.execute(refreshToken.userId);

    if (refreshTokenExpired) {
      await prisma.refreshToken.deleteMany({ 
        where: { 
          userId: refreshToken.userId,
        }}
      );
      const generateRefreshToken = new GenerateRefreshToken();  
      const newRefreshToken = await generateRefreshToken.execute(refreshToken.userId);

      return { token, refresh_token: newRefreshToken }  
    }

    return { token };
  }
}
