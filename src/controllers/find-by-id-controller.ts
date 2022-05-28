import { Request, Response } from "express";
import { FindByIDUseCase } from "../usecases/find-by-id-usecase";

export class FindByIDController {
  constructor(private findByIDUseCase: FindByIDUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const user = await this.findByIDUseCase.execute(id);
      return response
        .status(200)
        .json({ messsage: "Profile found successfully!", profile: user });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
