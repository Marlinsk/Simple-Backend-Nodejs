import { Request, Response } from "express";
import { FindAllUsersUseCase } from "@usecases/find-all-users-usecase";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.findAllUsersUseCase.execute();
      return response.status(200).json(users);
    } catch (error) {
      return response.json({
        status: error.status ? error.status : INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
}
