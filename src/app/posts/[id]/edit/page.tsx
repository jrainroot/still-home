import PostEdit from "./PostEdit";

async function getPost(id: string) {
  const response = await fetch(`http://localhost:8090/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error fetching post: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data.post;
}

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await Promise.resolve(params);
  const post = await getPost(id);

  return <PostEdit post={post} postId={id} />;
}
