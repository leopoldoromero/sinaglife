import { HttpClient } from '@shared/infrastructure/AxiosHttpClient';
import { Post } from '../domain/post';
import { PostRepository } from '../domain/post.repository';
import { environment, WP_POST_PATH } from '@shared/constants';

interface PostContentWordpressDto {content: {rendered: string}};
interface PostWordpressDto {
  id: string; 
  title: {rendered: string}; 
  excerpt: {rendered: string}; 
  content: {rendered: string}; 
  acf: {
    post_main_image: {
      image_src: string;
      image_alt: string;
    }
  }
}

function extractHtmlContent(renderedHtml: string, tag: string): string {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = renderedHtml;
  
  const h4Element = tempDiv.querySelector(tag);
  return  h4Element?.textContent || "";
}

export class PostWordpressRepository implements PostRepository {
  private httpClient: HttpClient;
  private readonly URL = `${environment.WORDPRES_URL}${WP_POST_PATH}`

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async get(id: string): Promise<string> {
    try {
      const res = await fetch(`${this.URL}/${id}`);
      const data = await res.json() as PostContentWordpressDto;
      return data.content.rendered
    } catch (error) {
      console.error(`Error fetching post id: ${id}, ${error}`);
      return '';
    }
  }

  async getMany(): Promise<Array<Post>> {
    console.log('URL', this.URL)
    try {
      const res = await fetch(this.URL);
      const data = await res.json() as Array<PostWordpressDto>;
      return data?.map((el: PostWordpressDto) => {
        const {id, title, excerpt, content, acf} = el
        return {
          id,
          title: title.rendered,
          subTitle: extractHtmlContent(content?.rendered, 'h4'),
          description: extractHtmlContent(excerpt?.rendered, 'p'),
          image: {
            id: 0,
            src: acf?.post_main_image?.image_src,
            alt: acf?.post_main_image?.image_alt ?? '',
            name: acf?.post_main_image?.image_alt ?? '',
          },
        }
      })
    } catch (error) {
      console.error('Error fetching post from wordpress', error);
      return [];
    }
   
  }
}
