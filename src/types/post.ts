export interface Post {
  id: number;
  title: string;
  author: {
    id: number;
    name: string;
  };
  createDate: string;
  views: number;
  likes: number;
  content?: string;
}
