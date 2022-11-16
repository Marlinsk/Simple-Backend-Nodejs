import { Request, Response } from "express";
import { FindAllUsersUseCase } from "../usecases/find-all-users-usecase";

export class FindAllUsersController {
  constructor(private findAllUsersUseCase: FindAllUsersUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const users = await this.findAllUsersUseCase.execute();
    return response
      .status(200)
      .json({ message: "Request made successfully", profiles: users });
  }
}
