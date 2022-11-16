import { Request, Response } from "express";
import { FindByIDUseCase } from "src/usecases";

export class FindByIDController {
  constructor(private findByIDUseCase: FindByIDUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const user = await this.findByIDUseCase.execute(id);
    return response
      .status(200)
      .json({ messsage: "Profile found successfully!", profile: user });
  }
}
