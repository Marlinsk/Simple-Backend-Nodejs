import { PrismaClient } from "@prisma/client";
import express, { json } from "express";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(json());

app.get("/", async (request, response) => {
  return response.send("Hello World!");
});

app.get("/feed/", async (request, response) => {
  const users = await prisma.user.findMany();
  response.json({ users });
});

app.get("/:id/profile", async (request, response) => {
  const { id } = request.params;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  response.json({ user });
});

app.post("/create-user", async (request, response) => {
  const { completename, username, email, password } = request.body;
  const user = await prisma.user.create({
    data: {
      completename,
      username,
      email,
      password,
    },
  });

  return response.json({ user });
});

app.put("/:id/edit-user", async (request, response) => {
  const { id } = request.params;
  const { completename, username, email, password } = request.body;

  const user = await prisma.user.update({
    where: { id },
    data: {
      completename,
      username,
      email,
      password,
    },
  });

  response.json({ user });
});

app.delete("/:id/delete", async (request, response) => {
  const { id } = request.params;
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  response.json({
    user: {
      message: "User successfully deleted from dataset",
    },
  });
});

app.listen(port, () => {
  console.log(`Server running in localhost:${port}`);
});
