import { PrismaUserAccountRepository } from "../repositories/implementations/prisma-user-account-repository";
import { CreateUserAccountController, UpdateUserAccountController, FindAllUsersController, FindByIDController, FindByUsernameController, DeleteUserAccountController } from "../controllers";
import { CreateUserAccountUseCase, UpdateUserAccountUseCase, DeleteUserAccountUseCase, FindAllUsersUseCase, FindByIDUseCase, FindByUsernameUseCase } from "../usecases";

const prismaUserAccountRepository = new PrismaUserAccountRepository();

const createUserAccountUseCase = new CreateUserAccountUseCase(prismaUserAccountRepository);
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
