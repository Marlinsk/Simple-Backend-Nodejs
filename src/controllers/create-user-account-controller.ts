import { Request, Response } from "express";
import { CreateUserAccountUseCase } from "../usecases/create-user-account-usecase";

export class CreateUserAccountController {
  constructor(private createUserAccountUseCase: CreateUserAccountUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { completename, username, email, password } = request.body;

    try {
      const user = await this.createUserAccountUseCase.execute({
        completename,
        username,
        email,
        password,
      });
      return response
        .status(201)
        .json({
          message: "User successfully created in dataset",
          profile: user,
        });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
