import { AuthenticateController } from "@controllers/authentication/authenticate-controller";
import { RefreshTokenUserController } from "@controllers/authentication/refresh-token-user-controller";
import { CreateUserAccountController } from "@controllers/user/create-user-account-controller";
import { DeleteUserAccountController } from "@controllers/user/delete-user-account-controller";
import { FindAllUsersController } from "@controllers/user/find-all-users-controller";
import { FindByIDController } from "@controllers/user/find-by-id-controller";
import { UpdateUserAccountController } from "@controllers/user/update-user-account-controller";
import { AuthenticateUseCase } from "@usecases/authentication/authenticate-usecase";
import { CreateUserAccountUseCase } from "@usecases/user/create-user-account-usecase";
import { DeleteUserAccountUseCase } from "@usecases/user/delete-user-account-usecase";
import { FindAllUsersUseCase } from "@usecases/user/find-all-users-usecase";
import { FindByIDUseCase } from "@usecases/user/find-by-id-usecase";
import { UpdateUserAccountUseCase } from "@usecases/user/update-user-account-usecase";
import { PrismaUserAccountRepository } from "@repositories/implementations/prisma-user-account-repository";

const prismaUserAccountRepository = new PrismaUserAccountRepository();

const authenticateUseCase = new AuthenticateUseCase(prismaUserAccountRepository);
const authenticateController = new AuthenticateController(authenticateUseCase);

const refreshTokenUserController = new RefreshTokenUserController();

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
  refreshTokenUserController,
  createUserAccountController,
  updateUserAccountController,
  deleteUserAccountController,
  findAllUsersController,
  findByIDController
}
