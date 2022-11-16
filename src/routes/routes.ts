import express, { request, response, Router } from "express";
import { createUserAccountController, updateUserAccountController, deleteUserAccountController, findAllUsersController, findByIDController, findByUsernameController } from ".";

export const routes = express.Router();

routes.post("/api/v1/data/create-user", async (request, response) => {
  return await createUserAccountController.handle(request, response);
});

routes.put(
  "/api/v1/data/user/options/edit-user/:id",
  async (request, response) => {
    return await updateUserAccountController.handle(request, response);
  }
);

routes.delete(
  "/api/v1/data/user/options/delete/:id",
  async (request, response) => {
    return deleteUserAccountController.handle(request, response);
  }
);

routes.get("/api/v1/data", async (request, response) => {
  return findAllUsersController.handle(request, response);
});

routes.get("/api/v1/data/user/profile/id/:id", async (request, response) => {
  return findByIDController.handle(request, response);
});

routes.get(
  "/api/v1/data/user/profile/username/:username",
  async (request, response) => {
    return findByUsernameController.handle(request, response);
  }
);
