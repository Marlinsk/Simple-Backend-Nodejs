import { Request, Response } from "express";
import { FindByEmailUseCase } from "../../../usecases/find-by-email-usecase";

export class FindByEmailController {
  constructor(private findByEmailUseCase: FindByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    try {
      const user = await this.findByEmailUseCase.execute(email);
      return response
        .status(200)
        .json({ messsage: "Profile found successfully!", profile: user });
    } catch (error) {
      return response.status(400).json();
    }
  }
}
