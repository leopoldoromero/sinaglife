export interface CreateUserRequestDTO {
  name: string;
  lastName: string;
  birthDate: string;
  email: string;
  password: string;
}

export type UserLoginRequestDTO = {
  email: string;
  password: string;
};

export type UserLoginResponseDTO = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  isConfirmed: boolean;
  token: string;
};

export type RecoveryPasswordRequestDTO = {
  email: string;
};

export type ConfirmRecoveryPasswordRequestDTO = {
  email: string;
  newPassword: string;
  token: string;
};

export type UserUpdateRequestDTO = Partial<CreateUserRequestDTO> & { newPassword?: string };

export type RemoveRequestDTO = {
  email: string;
};
