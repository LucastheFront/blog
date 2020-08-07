import { PostImage } from '@core/api/post-image.model';

export interface Post {
    image: PostImage;
    title: string;
    article: string;
    author: string;
}
