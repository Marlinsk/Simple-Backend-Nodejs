import { Request, Response } from "express";
import { UpdateUserAccountUseCase } from "../usecases/update-user-account-usecase";

export class UpdateUserAccountController {
  constructor(private updateUserAccountUseCase: UpdateUserAccountUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { completename, username, email, password } = request.body;

    const user = await this.updateUserAccountUseCase.execute({
      id,
      completename,
      username,
      email,
      password,
    });
    return response
      .status(200)
      .json({
        message: "User successfully updated in in dataset",
        profile: user,
      });
  }
}
