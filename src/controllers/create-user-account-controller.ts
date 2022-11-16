import { Request, Response } from "express";
import { CreateUserAccountUseCase } from "src/usecases";

export class CreateUserAccountController {
  constructor(private createUserAccountUseCase: CreateUserAccountUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { completename, username, email, password } = request.body;

    const user = await this.createUserAccountUseCase.execute({
      completename,
      username,
      email,
      password,
    });

    const { password: _, ...data } = user

    return response
      .status(201)
      .json({
        message: "User successfully created in dataset",
        profile: data,
      });
  }
}
