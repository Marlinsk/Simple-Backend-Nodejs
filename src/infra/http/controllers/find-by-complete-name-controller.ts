import { Request, Response } from "express";
import { FindByCompleteNameUseCase } from "../../../usecases/find-by-complete-name-usecase";

export class FindByCompleteNameController {
  constructor(private findByCompleteNameUseCase: FindByCompleteNameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { completename } = request.params;
    try {
      const user = await this.findByCompleteNameUseCase.execute(completename);
      return response
        .status(200)
        .json({ messsage: "Profile found successfully!", profile: user });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
