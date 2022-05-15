import { PrismaClient } from "@prisma/client";
import express, { json } from "express";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(json());

app.get("/", async (request, response) => {
  return response.send("Hello World!");
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

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
