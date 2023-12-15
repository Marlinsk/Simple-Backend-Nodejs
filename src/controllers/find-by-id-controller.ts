import { Request, Response } from "express";
import { FindByIDUseCase } from "@usecases/find-by-id-usecase";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export class FindByIDController {
  constructor(private readonly findByIDUseCase: FindByIDUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
  
      const user = await this.findByIDUseCase.execute(id);
      return response.status(200).json(user);
    } catch (error: any) { 
      return response.json({
        status: error.status ? error.status : INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
}
