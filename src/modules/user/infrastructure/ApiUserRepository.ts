import { HttpClient } from "shared/infrastructure/AxiosHttpClient";
import { CreateUserInput, RemoveUserInput, UpdateUserInput, UserRepository } from "../domain/UserRepository";
import { UserLoginInput, UserLoginOutput } from "./user.dtos";

export class ApiUserRepository implements UserRepository {
    private httpClient: HttpClient;
    private endpoint: string = '/users';
  
    constructor(httpClient: HttpClient) {
      this.httpClient = httpClient;
    }
  
    async get<User>(id: string): Promise<User> {
      return this.httpClient.get<User>(`${this.endpoint}/${id}`);
    }
  
    async create(params: CreateUserInput): Promise<void> {
      return this.httpClient.post(`${this.endpoint}`, params);
    }
  
    async remove(params: RemoveUserInput): Promise<void> {
      return this.httpClient.post(`${this.endpoint}/drop-out`, params);
    }
  
    async update(params: UpdateUserInput): Promise<void> {
      return this.httpClient.put(`${this.endpoint}`, params);
    }

    async logIn(input: UserLoginInput): Promise<UserLoginOutput> {
      return this.httpClient.post(`/login`, input);
    }
  
    async logOut(): Promise<void> {
      return this.httpClient.post(`/logout`);
    }

    async refreshFromJwt(): Promise<UserLoginOutput> {
      return this.httpClient.get(`/refresh`);
    }
  
  }
  