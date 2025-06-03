"use client";

import Link from "next/link";
import { Post } from "@/types/post";
import { formatDate } from "@/utils/date";
import { useRouter } from "next/navigation";

interface PostDetailProps {
  post: Post;
  postId: string;
}

export default function PostDetail({ post, postId }: PostDetailProps) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8090/api/posts/${postId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("게시글이 삭제되었습니다.");
        router.push("/posts");
      } else {
        alert("게시글 삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("게시글 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/posts" className="hover:underline">
            ← 목록으로 돌아가기
          </Link>
          <h1 className="text-2xl font-bold">자유게시판</h1>
        </div>

        {/* 게시글 상세 */}
        <div className="bg-[#1f1f1e] rounded-xl shadow-lg p-6">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <div className="flex justify-between text-gray-600">
              <div className="flex gap-4">
                <span>작성자: {post.author}</span>
                <span>작성일: {formatDate(post.createDate)}</span>
              </div>
              <div className="flex gap-4">
                <span>조회수: {post.views}</span>
                <span>좋아요: {post.likes}</span>
              </div>
            </div>
          </div>

          <div className="min-h-[300px] mb-6">
            {post.content || "내용이 없습니다."}
          </div>

          {/* 버튼 영역 */}
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 rounded-full bg-[#222218] hover:bg-gray-200 transition">
              좋아요
            </button>
            <button
              onClick={() => router.push(`/posts/${postId}/edit`)}
              className="px-4 py-2 rounded-full bg-[#7b9467] hover:bg-[#6a7f57] transition"
            >
              수정
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition"
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
