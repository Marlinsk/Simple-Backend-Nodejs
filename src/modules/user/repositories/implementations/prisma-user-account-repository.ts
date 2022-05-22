import { User } from "../../../../domain/entity/User";
import { prisma } from "../../../../prisma";
import { ICreateUserAccountDTO } from "../../dto/iCreateUserAccountDTO";
import { IUserAccountRepository } from "../iUserAccountRepository";

export class PrismaUserAccountRepository implements IUserAccountRepository {
  async create({
    completename,
    username,
    email,
    password,
  }: ICreateUserAccountDTO) {
    await prisma.user.create({
      data: {
        completename,
        username,
        email,
        password,
      },
    });
  }

  // async save({
  //   id,
  //   completename,
  //   username,
  //   email,
  //   password,
  // }: User): Promise<User> {
  //   return await prisma.user.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       completename,
  //       username,
  //       email,
  //       password,
  //     },
  //   });
  // }

  // async delete(id: string): Promise<void> {
  //   return await prisma.user.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // async findAllUsers(): Promise<User> {
  //   return await prisma.user.findMany();
  // }

  // async findById(id: string): Promise<User | null> {
  //   return await prisma.user.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // async findByCompleteName(completename: string): Promise<User | null> {
  //   return await prisma.user.findMany({
  //     where: {
  //       completename: {
  //         contains: completename,
  //       },
  //     },
  //   });
  // }

  // async findByUsername(username: string): Promise<User | null> {
  //   return await prisma.user.findMany({
  //     where: {
  //       username: {
  //         contains: username,
  //       },
  //     },
  //   });
  // }

  // async findByEmail(email: string): Promise<User> {
  //   return await prisma.user.findMany({
  //     where: {
  //       email: {
  //         contains: email,
  //       },
  //     },
  //   });
  // }
}
