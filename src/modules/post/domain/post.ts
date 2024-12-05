export interface Post {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    image: PostImage;
}
  
export interface PostImage {
    alt: string;
    id: number;
    name: string;
    src: string;
}