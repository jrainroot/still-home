"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { handleFormChange } from "@/utils/formUtils";
import { Post } from "@/types/post";

interface PostEditProps {
  post: Post;
  postId: string;
}

export default function PostEdit({ post, postId }: PostEditProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: post.title,
    content: post.content || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8090/api/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...post, // 기존 post 데이터를 유지하면서
            ...formData, // title과 content만 업데이트
          }),
        }
      );

      if (response.ok) {
        alert("게시글이 수정되었습니다.");
        router.push(`/posts/${postId}`);
      } else {
        alert("게시글 수정에 실패했습니다.");
      }
    } catch (error: unknown) {
      console.error("Error updating post:", error as Error);
      alert("게시글 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href={`/posts/${postId}`} className="hover:underline">
            ← 게시글로 돌아가기
          </Link>
          <h1 className="text-2xl font-bold">게시글 수정</h1>
        </div>

        {/* 게시글 작성/수정 폼 */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1f1f1e] rounded-xl shadow-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={e => handleFormChange(e, setFormData)}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#2a2a29] border border-gray-700 focus:outline-none focus:border-[#7b9467]"
              placeholder="제목을 입력하세요"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              내용
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={e => handleFormChange(e, setFormData)}
              required
              rows={10}
              className="w-full px-4 py-2 rounded-lg bg-[#2a2a29] border border-gray-700 focus:outline-none focus:border-[#7b9467] resize-none"
              placeholder="내용을 입력하세요"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Link
              href={`/posts/${postId}`}
              className="px-6 py-2 rounded-full bg-gray-600 hover:bg-gray-700 transition"
            >
              취소
            </Link>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#7b9467] hover:bg-[#6a7f57] transition"
            >
              수정 완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
