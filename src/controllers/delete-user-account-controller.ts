import { Request, Response } from "express";
import { DeleteUserAccountUseCase } from "@usecases/delete-user-account-usecase";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export class DeleteUserAccountController {
  constructor(private readonly deleteUserAccountUseCase: DeleteUserAccountUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      await this.deleteUserAccountUseCase.execute(id);
      return response.status(200).json({
        message: "User successfully deleted from dataset",
      });
    } catch (error: any) {
      return response.json({
        status: error.status ? error.status : INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
}
