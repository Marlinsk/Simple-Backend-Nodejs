import { Request, Response } from "express";
import { AuthenticateUseCase } from "@usecases/authenticate-usecase";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export class AuthenticateController {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const user = await this.authenticateUseCase.execute({ email, password });
      return response.status(200).json(user)
    } catch (error: any) {
      return response.json({
        status: error.status ? error.status : INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
}
