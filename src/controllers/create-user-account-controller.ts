import { Request, Response } from "express";
import { CreateUserAccountUseCase } from "../usecases";

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

    const { password: _, ...data } = user

    return response.status(201).json(data);
  }
}
