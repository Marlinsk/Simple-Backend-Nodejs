import { Request, Response } from "express";
import { UpdateUserAccountUseCase } from "../usecases";

export class UpdateUserAccountController {
  constructor(private updateUserAccountUseCase: UpdateUserAccountUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
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
  }
}
