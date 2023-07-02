import { User } from "../../entities/User";
import { prisma } from "../../prisma/PrismaClient";
import { ICreateUserAccountDTO } from "../../dtos/iCreateUserAccountDTO";
import { UserAccountRepository } from "../user-account-repository";
import { IUpdateUserAccountDTO } from "../../dtos/iUpdateUserAccountDTO";

export class PrismaUserAccountRepository implements UserAccountRepository {
  async create({ completename, username, email, password }: ICreateUserAccountDTO): Promise<User> {
    return await prisma.user.create({
      data: {
        completename,
        username,
        email,
        password,
      },
    });
  }

  async update({ id, completename, username, email, password }: IUpdateUserAccountDTO): Promise<User> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        completename,
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

  async findAllUsers(): Promise<Pick<User, 'id' | 'completename' | 'username' | 'email'>[] | null> {
    const users = await prisma.user.findMany({ 
      select: {
        id: true,
        completename: true,
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
    const user = await prisma.user.findUnique({
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
    const user = await prisma.user.findUnique({
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
