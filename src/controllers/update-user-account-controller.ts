import { Request, Response } from "express";
import { UpdateUserAccountUseCase } from "@usecases/update-user-account-usecase";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export class UpdateUserAccountController {
  constructor(private readonly updateUserAccountUseCase: UpdateUserAccountUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, username, email, password } = request.body;
  
      const user = await this.updateUserAccountUseCase.execute({
        id,
        name,
        username,
        email,
        password,
      });
      
      return response.status(200).json(user);
    } catch (error) {
      return response.json({
        status: error.status ? error.status : INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
}
