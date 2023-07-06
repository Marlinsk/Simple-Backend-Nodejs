import "dotenv/config";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";
import { BadRequestError } from "@errors/AppError";

export class GenereateTokenProvider {
  async execute(userId: string) {
    const { expiresIn, secret } = authConfig.jwt;

    if (!secret) {
      throw new BadRequestError("Secret is not defined on the configuration.");
    }

    const token = sign({}, secret, {
      subject: userId,
      expiresIn,
    });

    return token;
  }
}
