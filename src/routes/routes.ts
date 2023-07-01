import express, { request, response, Router } from "express";
import { createUserAccountController, updateUserAccountController, deleteUserAccountController, findAllUsersController, findByIDController, findByUsernameController } from ".";

export const routes = express.Router();

routes.get("/", async (request, response) => {
  return findAllUsersController.handle(request, response);
});

routes.get("/:id", async (request, response) => {
  return findByIDController.handle(request, response);
});

routes.get("/user/profile/:username", async (request, response) => {
  return findByUsernameController.handle(request, response);
});

routes.post("/", async (request, response) => {
  return await createUserAccountController.handle(request, response);
});

routes.put("/:id", async (request, response) => {
  return await updateUserAccountController.handle(request, response);
});

routes.delete("/:id", async (request, response) => {
  return deleteUserAccountController.handle(request, response);
});
