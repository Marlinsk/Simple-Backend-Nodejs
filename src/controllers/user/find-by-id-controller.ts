import { Request, Response } from "express";
import { FindByIDUseCase } from "@usecases/user/find-by-id-usecase";

export class FindByIDController {
  constructor(private readonly findByIDUseCase: FindByIDUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const user = await this.findByIDUseCase.execute(id);
    return response.status(200).json(user);
  }
}
