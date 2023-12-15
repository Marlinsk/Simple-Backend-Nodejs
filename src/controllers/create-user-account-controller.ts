import { Request, Response } from "express";
import { CreateUserAccountUseCase } from "@usecases/create-user-account-usecase";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export class CreateUserAccountController {
  constructor(private createUserAccountUseCase: CreateUserAccountUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, username, email, password } = request.body;
  
      const user = await this.createUserAccountUseCase.execute({
        name,
        username,
        email,
        password,
      });
  
      return response.status(201).json(user);
    } catch (error: any) {
      return response.json({
        status: error.status ? error.status : INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
}
