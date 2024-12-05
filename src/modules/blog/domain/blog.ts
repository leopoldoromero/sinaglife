
export interface Blog {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    image: BlogImage;
    detailTitle: string;
    content: Array<BlogContent>;
  }
  
  export interface BlogImage {
    alt: string;
    id: number;
    name: string;
    src: string;
  }
  
  export interface BlogContent {
    text: string;
    detailTitle: string;
    paragraphPosition: string;
    image: BlogImage;
  }
  