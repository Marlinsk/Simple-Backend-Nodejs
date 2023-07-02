import { PrismaUserAccountRepository } from "../repositories/implementations/prisma-user-account-repository";
import { CreateUserAccountController, UpdateUserAccountController, FindAllUsersController, FindByIDController, DeleteUserAccountController, AuthenticateController } from "../controllers";
import { CreateUserAccountUseCase, UpdateUserAccountUseCase, DeleteUserAccountUseCase, FindAllUsersUseCase, FindByIDUseCase, AuthenticateUseCase } from "../usecases";

const prismaUserAccountRepository = new PrismaUserAccountRepository();

const authenticateUseCase = new AuthenticateUseCase(prismaUserAccountRepository);
const authenticateController = new AuthenticateController(authenticateUseCase);

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

export {
  authenticateController,
  createUserAccountController,
  updateUserAccountController,
  deleteUserAccountController,
  findAllUsersController,
  findByIDController
}
