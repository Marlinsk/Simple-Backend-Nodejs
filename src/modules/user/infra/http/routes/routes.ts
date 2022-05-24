import express, { request, response, Router } from "express";

import { CreateUserAccountUseCase } from "../../../usecases/create-user-account-usecase";
import { DeleteUserAccountUseCase } from "../../../usecases/delete-user-account-usecase";
import { UpdateUserAccountUseCase } from "../../../usecases/update-user-account-usecase";

import { PrismaUserAccountRepository } from "../../../repositories/implementations/prisma-user-account-repository";
import { CreateUserAccountController } from "../controllers/create-user-account-controller";
import { DeleteUserAccountController } from "../controllers/delete-user-account-controller";
import { UpdateUserAccountController } from "../controllers/update-user-account-controller";

export const routes = express.Router();

routes.post("/create-user/", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();
  const createUserAccountUseCase = new CreateUserAccountUseCase(
    prismaUserAccountRepository
  );
  const createUserAccountController = new CreateUserAccountController(
    createUserAccountUseCase
  );

  return await createUserAccountController.handle(request, response);
});

routes.put("/edit-user/:id", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();
  const updateUserAccountUseCase = new UpdateUserAccountUseCase(
    prismaUserAccountRepository
  );
  const updateUserAccountController = new UpdateUserAccountController(
    updateUserAccountUseCase
  );

  return await updateUserAccountController.handle(request, response);
});

routes.delete("/delete/:id", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();
  const deleteUserAccountUseCase = new DeleteUserAccountUseCase(
    prismaUserAccountRepository
  );
  const deleteUserAccountController = new DeleteUserAccountController(
    deleteUserAccountUseCase
  );

  return deleteUserAccountController.handle(request, response);
});
