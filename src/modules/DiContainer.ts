import { ApiCartRepository } from "@modules/cart/infrastructure/ApiCartRepository";
import { UserRepository } from "@modules/user/domain/UserRepository";
import { ApiUserRepository } from "@modules/user/infrastructure/ApiUserRepository";
import { AxiosHttpClient } from "shared/infrastructure/AxiosHttpClient";
import { PostWordpressRepository } from "./post/infrastructure/post-wordpress.repository";
import { ApiProductRepository } from "./product/infrastructure/ApiProductRepository";

export class Container {
  private bindMap = new Map<string, unknown>();

  bind<T>(identifier: string, instance: T): void {
    this.bindMap.set(identifier, instance);
  }

  get<T>(identifier: string): T {
    const instance = this.bindMap.get(identifier);
    if (!instance) {
      throw new Error(`No binding found for identifier: ${identifier}`);
    }
    return instance as T;
  }
}

const container = new Container();
const axiosHttpClient = new AxiosHttpClient();
const userRepository: UserRepository = new ApiUserRepository(axiosHttpClient);
const cartRepository = new ApiCartRepository(axiosHttpClient);
const postRepository= new PostWordpressRepository(axiosHttpClient);
const productRepository = new ApiProductRepository(axiosHttpClient);

container.bind('AxiosHttpClient', axiosHttpClient);
container.bind('UserRepository', userRepository);
container.bind('CartRepository', cartRepository);
container.bind('PostRepository', postRepository);
container.bind('ProductRepository', productRepository);

export default container;
