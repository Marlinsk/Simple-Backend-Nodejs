import express, { request, response, Router } from "express";

import { PrismaUserAccountRepository } from "./repositories/implementations/prisma-user-account-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

import { CreateUserAccountUseCase } from "./usecases/create-user-account-usecase";
import { DeleteUserAccountUseCase } from "./usecases/delete-user-account-usecase";
import { FindAllUsersUseCase } from "./usecases/find-all-users-usecase";
import { FindByIDUseCase } from "./usecases/find-by-id-usecase";
import { FindByUsernameUseCase } from "./usecases/find-by-username-usecase";
import { UpdateUserAccountUseCase } from "./usecases/update-user-account-usecase";

import { CreateUserAccountController } from "./controllers/create-user-account-controller";
import { DeleteUserAccountController } from "./controllers/delete-user-account-controller";
import { FindAllUsersController } from "./controllers/find-all-users-controller";
import { FindByIDController } from "./controllers/find-by-id-controller";
import { FindByUsernameController } from "./controllers/find-by-username-controller";
import { UpdateUserAccountController } from "./controllers/update-user-account-controller";

export const routes = express.Router();

routes.post("/api/v1/data/create-user", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const createUserAccountUseCase = new CreateUserAccountUseCase(
    prismaUserAccountRepository,
    nodemailerMailAdapter
  );
  const createUserAccountController = new CreateUserAccountController(
    createUserAccountUseCase
  );

  return await createUserAccountController.handle(request, response);
});

routes.put(
  "/api/v1/data/user/options/edit-user/:id",
  async (request, response) => {
    const prismaUserAccountRepository = new PrismaUserAccountRepository();
    const updateUserAccountUseCase = new UpdateUserAccountUseCase(
      prismaUserAccountRepository
    );
    const updateUserAccountController = new UpdateUserAccountController(
      updateUserAccountUseCase
    );

    return await updateUserAccountController.handle(request, response);
  }
);

routes.delete(
  "/api/v1/data/user/options/delete/:id",
  async (request, response) => {
    const prismaUserAccountRepository = new PrismaUserAccountRepository();
    const deleteUserAccountUseCase = new DeleteUserAccountUseCase(
      prismaUserAccountRepository
    );
    const deleteUserAccountController = new DeleteUserAccountController(
      deleteUserAccountUseCase
    );

    return deleteUserAccountController.handle(request, response);
  }
);

routes.get("/api/v1/data", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();
  const findAllUsersUseCase = new FindAllUsersUseCase(
    prismaUserAccountRepository
  );
  const findAllUsersController = new FindAllUsersController(
    findAllUsersUseCase
  );

  return findAllUsersController.handle(request, response);
});

routes.get("/api/v1/data/:id", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();
  const findByIDUseCase = new FindByIDUseCase(prismaUserAccountRepository);
  const findByIDController = new FindByIDController(findByIDUseCase);

  return findByIDController.handle(request, response);
});

routes.get("/api/v1/data/:username", async (request, response) => {
  const prismaUserAccountRepository = new PrismaUserAccountRepository();
  const findByUsernameUseCase = new FindByUsernameUseCase(
    prismaUserAccountRepository
  );
  const findByUsernameController = new FindByUsernameController(
    findByUsernameUseCase
  );

  return findByUsernameController.handle(request, response);
});
