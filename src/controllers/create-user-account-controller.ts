import { Request, Response } from "express";
import { CreateUserAccountUseCase } from "@usecases/create-user-account-usecase";

export class CreateUserAccountController {
  constructor(private createUserAccountUseCase: CreateUserAccountUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body;

    const user = await this.createUserAccountUseCase.execute({
      name,
      username,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}
