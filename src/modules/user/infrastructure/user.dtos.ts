export interface CreateUserInput {
  name: string;
  lastName: string;
  birthDate: string;
  email: string;
  password: string;
}

export type UserLoginInput = {
  email: string;
  password: string;
};

export type UserLoginOutput = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  isConfirmed: boolean;
  token: string;
};

export type RecoveryPasswordInput = {
  email: string;
};

export type ConfirmRecoveryPasswordInput = {
  email: string;
  newPassword: string;
  token: string;
};

export type UserUpdateInput = Partial<CreateUserInput> & { newPassword?: string };

export type RemoveRequestDTO = {
  email: string;
};
