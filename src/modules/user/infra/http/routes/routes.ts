import express, { request, response, Router } from "express";
import { CreateUserAccountUseCase } from "../../../../../usecases/create-user-account-usecase";
import { PrismaUserAccountRepository } from "../../../repositories/implementations/prisma-user-account-repository";
import { CreateUserAccountController } from "../controllers/create-user-account-controller";

export const routes = express.Router();

routes.post("/create-user", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();

  const createUserAccountUseCase = new CreateUserAccountUseCase(
    prismaUserAccountRepository
  );

  const createUserAccountController = new CreateUserAccountController(
    createUserAccountUseCase
  );

  return await createUserAccountController.handle(request, response);
});
