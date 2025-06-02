export interface Post {
  id: number;
  title: string;
  author: string;
  createDate: string;
  views: number;
  likes: number;
  content?: string;
}
