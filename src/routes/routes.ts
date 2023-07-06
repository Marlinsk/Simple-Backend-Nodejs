import express, { request, response, Router } from "express";
import { createUserAccountController, updateUserAccountController, deleteUserAccountController, findAllUsersController, findByIDController, authenticateController, refreshTokenUserController } from ".";
import { ensureAuthenticatedMiddleware } from "@middleware/ensure-authenticated-middleware";

export const routes = express.Router();

routes.get("/", ensureAuthenticatedMiddleware, async (request, response) => {
  return await findAllUsersController.handle(request, response);
});

routes.get("/:id", ensureAuthenticatedMiddleware, async (request, response) => {
  return findByIDController.handle(request, response);
});

routes.post("/", async (request, response) => {
  return await createUserAccountController.handle(request, response);
});

routes.put("/:id", ensureAuthenticatedMiddleware, async (request, response) => {
  return await updateUserAccountController.handle(request, response);
});

routes.delete("/:id", ensureAuthenticatedMiddleware, async (request, response) => {
  return await deleteUserAccountController.handle(request, response);
});

routes.post("/login", async (request, response) => {
  return await authenticateController.handle(request, response);
});

routes.post("/refresh-token", async (request, response) => {
  return await refreshTokenUserController.handle(request, response);
});
