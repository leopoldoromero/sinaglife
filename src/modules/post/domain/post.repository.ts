import { Criteria } from "@shared/domain/criteria";
import { Post } from "./post";

export interface PostRepository {
    get(id: string): Promise<string>;
    getMany(): Promise<Array<Post>>;
}