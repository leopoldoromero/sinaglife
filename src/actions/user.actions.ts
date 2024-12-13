'use server'
import { cookies } from 'next/headers';
import container from "@modules/DiContainer";
import { RemoveUserInput, UpdateUserInput, UserRepository } from '@modules/user/domain/UserRepository';
import { CreateUserInput, UserLoginInput, UserLoginOutput } from '@modules/user/infrastructure/user.dtos';

const userRepository = container.get<UserRepository>('UserRepository');

export async function logInAction(input: UserLoginInput): Promise<UserLoginOutput> {
    const cookieStore = await cookies();
    const userLoginResponse = await userRepository.logIn(input);
    cookieStore.set('jwt', userLoginResponse?.token);
    return userLoginResponse;
}

export async function logOutAction(): Promise<void> {
    return userRepository.logOut();
}

export async function refreshJwtAction() {
    // TODO: it would be good to add a expiricy token controlled error
    // TODO: and show feed back to the user.
    return userRepository.refreshFromJwt();
}

export async function createUserAction(input: CreateUserInput): Promise<void> {
    return userRepository.create(input);
}

export async function updateUserAction(input: UpdateUserInput): Promise<void> {
    return userRepository.update(input);
}

export async function removeUserAction(input: RemoveUserInput): Promise<void> {
    return userRepository.remove(input);
}