import express, { json } from "express";
import { prisma } from "./prisma";

const app = express();
const port = 3000;

app.use(json());

app
  .get("/", async (request, response) => {
    return response.send("Hello World!");
  })
  .listen(port, () => {
    console.log(`Server running in localhost:${port}`);
  });

app.get("/feed/", async (request, response) => {
  try {
    const users = await prisma.user.findMany();
    response
      .status(200)
      .json({ message: "Request made successfully", profiles: users });
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

app.get("/:id/profile", async (request, response) => {
  try {
    const { id } = request.params;
    const profile = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    response
      .status(200)
      .json({ messagem: "Profile found successfully!", profile: profile });
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

app.post("/create-user", async (request, response) => {
  try {
    const { completename, username, email, password } = request.body;
    const createUserAccount = await prisma.user.create({
      data: {
        completename,
        username,
        email,
        password,
      },
    });
    response.status(201).json({
      message: "User successfully created in dataset",
      create: createUserAccount,
    });
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

app.put("/:id/edit-user", async (request, response) => {
  try {
    const { id } = request.params;
    const { completename, username, email, password } = request.body;
    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        completename,
        username,
        email,
        password,
      },
    });
    response.status(200).json({
      message: "User successfully updated in dataset",
      update: updateUser,
    });
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

app.delete("/:id/delete", async (request, response) => {
  try {
    const { id } = request.params;
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    response.status(200).json({
      message: "User successfully deleted from dataset",
      deleted: deleteUser,
    });
  } catch (error) {
    response.status(400).json({ error: error });
  }
});
