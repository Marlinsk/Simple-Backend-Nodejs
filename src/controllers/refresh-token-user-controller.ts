import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "@usecases/refresh-token-user-usecase";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export class RefreshTokenUserController {
  async handle(request: Request, response: Response): Promise<Response>  {
    try {
      const { refresh_token } = request.body;
      const refreshTokenUserUseCase = new RefreshTokenUserUseCase();
      const token = await refreshTokenUserUseCase.execute(refresh_token);
      return response.json(token)
    } catch (error: any) {
      return response.json({
        status: error.status ? error.status : INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
}
