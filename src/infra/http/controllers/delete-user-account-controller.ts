import { Request, Response } from "express";
import { DeleteUserAccountUseCase } from "../../../usecases/delete-user-account-usecase";

export class DeleteUserAccountController {
  constructor(private deleteUserAccountUseCase: DeleteUserAccountUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteUserAccountUseCase.execute(id);
      return response.status(200).json({
        message: "User successfully deleted from dataset",
      });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
