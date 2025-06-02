import { use } from "react";
import PostDetail from "./PostDetail";

export default function Page({ params }: { params: { id: string } }) {
  const postId = use(Promise.resolve(params.id));

  return <PostDetail postId={postId} />;
}
