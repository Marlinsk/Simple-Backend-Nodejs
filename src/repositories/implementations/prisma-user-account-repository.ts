import { User } from "@entities/User";
import { prisma } from "@prisma-client/PrismaClient";
import { CreateUserAccountDTO } from "@dtos/CreateUserAccountDTO";
import { UpdateUserAccountDTO } from "@dtos/UpdateUserAccountDTO";
import { UserAccountRepository } from "../user-account-repository";
import { UserAccountResponseDTO } from "@dtos/UserAccountResponseDTO";

export class PrismaUserAccountRepository implements UserAccountRepository {
  async create({ name, username, email, password }: CreateUserAccountDTO): Promise<User> {
    return await prisma.user.create({
      data: {
        name,
        username,
        email,
        password,
      },
    });
  }

  async update({ id, name, username, email, password }: UpdateUserAccountDTO): Promise<User> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        username,
        email,
        password,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<UserAccountResponseDTO[] | null> {
    const users = await prisma.user.findMany({ 
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        password: false
      }
    });

    if(!users) {
      return null;
    }

    return users;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if(!user) {
      return null
    }

    return user
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if(!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if(!user) {
      return null
    }

    return user
  }
}
