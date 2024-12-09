import { UserLoginInput, UserLoginOutput } from "../infrastructure/user.dtos";
import { User } from "./User";

export interface CreateUserInput {
  name: string;
  lastName: string;
  birthDate: string;
  email: string;
  password: string;
}

export type UpdateUserInput = Partial<CreateUserInput> & { newPassword?: string };

export type RemoveUserInput = {
  email: string;
};

export interface UserRepository {
    get(id: string): Promise<User>
    create(params: CreateUserInput): Promise<void>;
    remove(params: RemoveUserInput): Promise<void>;
    update(params: UpdateUserInput): Promise<void>;
    logIn(input: UserLoginInput): Promise<UserLoginOutput>;
    logOut(): Promise<void>;
    refreshFromJwt(): Promise<UserLoginOutput>;
}