import { NodemailerMailAdapter } from "src/adapters/nodemailer/nodemailer-mail-adapter";
import { CreateUserAccountController } from "src/controllers/create-user-account-controller";
import { DeleteUserAccountController } from "src/controllers/delete-user-account-controller";
import { FindAllUsersController } from "src/controllers/find-all-users-controller";
import { FindByIDController } from "src/controllers/find-by-id-controller";
import { FindByUsernameController } from "src/controllers/find-by-username-controller";
import { UpdateUserAccountController } from "src/controllers/update-user-account-controller";
import { PrismaUserAccountRepository } from "src/repositories/implementations/prisma-user-account-repository";
import { CreateUserAccountUseCase } from "src/usecases/create-user-account-usecase";
import { DeleteUserAccountUseCase } from "src/usecases/delete-user-account-usecase";
import { FindAllUsersUseCase } from "src/usecases/find-all-users-usecase";
import { FindByIDUseCase } from "src/usecases/find-by-id-usecase";
import { FindByUsernameUseCase } from "src/usecases/find-by-username-usecase";
import { UpdateUserAccountUseCase } from "src/usecases/update-user-account-usecase";


const prismaUserAccountRepository = new PrismaUserAccountRepository();
const nodemailerMailAdapter = new NodemailerMailAdapter();

const createUserAccountUseCase = new CreateUserAccountUseCase(prismaUserAccountRepository, nodemailerMailAdapter);
const createUserAccountController = new CreateUserAccountController(createUserAccountUseCase);

const updateUserAccountUseCase = new UpdateUserAccountUseCase(prismaUserAccountRepository);
const updateUserAccountController = new UpdateUserAccountController(updateUserAccountUseCase);

const deleteUserAccountUseCase = new DeleteUserAccountUseCase(prismaUserAccountRepository);
const deleteUserAccountController = new DeleteUserAccountController(deleteUserAccountUseCase);

const findAllUsersUseCase = new FindAllUsersUseCase(prismaUserAccountRepository);
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);

const findByIDUseCase = new FindByIDUseCase(prismaUserAccountRepository);
const findByIDController = new FindByIDController(findByIDUseCase);

const findByUsernameUseCase = new FindByUsernameUseCase(prismaUserAccountRepository);
const findByUsernameController = new FindByUsernameController(findByUsernameUseCase);

export {
  createUserAccountUseCase,
  createUserAccountController,
  updateUserAccountUseCase,
  updateUserAccountController,
  deleteUserAccountUseCase,
  deleteUserAccountController,
  findAllUsersUseCase,
  findAllUsersController,
  findByIDUseCase,
  findByIDController,
  findByUsernameUseCase,
  findByUsernameController
}
