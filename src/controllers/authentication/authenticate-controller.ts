import { Request, Response } from "express";
import { AuthenticateUseCase } from "@usecases/authentication/authenticate-usecase";

export class AuthenticateController {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const user = await this.authenticateUseCase.execute({
      email, 
      password
    });

    return response.status(200).json(user)
  }
}
