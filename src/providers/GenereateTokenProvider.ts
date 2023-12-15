import "dotenv/config";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";
import { AppError } from "@errors/AppError";
import { BAD_REQUEST } from "src/constants/http-status";

export class GenereateTokenProvider {
  async execute(userId: string) {
    const { expiresIn, secret } = authConfig.jwt;

    if (!secret) {
      throw new AppError("Secret is not defined on the configuration.", BAD_REQUEST);
    }

    const token = sign({}, secret, {
      subject: userId,
      expiresIn,
    });

    return token;
  }
}
