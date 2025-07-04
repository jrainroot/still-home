"use client";

import { formatDate } from "@/utils/date";
import Link from "next/link";
import { useEffect, useState } from "react";

// 게시글 타입 정의
interface Post {
  id: number;
  title: string;
  author: {
    id: number;
    name: string;
  };
  createDate: string;
  views: number;
  likes: number;
}

// 더미 게시글 데이터
// const dummyPosts: Post[] = [
//   {
//     id: 1,
//     title: "오늘의 작은 기쁨을 나누고 싶어요",
//     author: "평화로운하루",
//     create_date: "2024-03-20",
//     views: 128,
//     likes: 15,
//   },
//   {
//     id: 2,
//     title: "새로운 취미를 시작했어요",
//     author: "조용한바람",
//     create_date: "2024-03-19",
//     views: 95,
//     likes: 12,
//   },
//   {
//     id: 3,
//     title: "오늘 아침 산책길에서 만난 고양이",
//     author: "따뜻한햇살",
//     create_date: "2024-03-18",
//     views: 156,
//     likes: 23,
//   },
//   {
//     id: 4,
//     title: "요즘 읽고 있는 책 추천해요",
//     author: "책사랑",
//     create_date: "2024-03-17",
//     views: 203,
//     likes: 31,
//   },
//   {
//     id: 5,
//     title: "오늘 만든 수제 쿠키 레시피 공유",
//     author: "달콤한시간",
//     create_date: "2024-03-16",
//     views: 178,
//     likes: 27,
//   },
// ];

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8090/api/posts")
      .then(result => result.json())
      .then(jsonData => setPosts(jsonData.data.posts));
  }, []);
  console.log("post");
  console.log(posts);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className=" hover:underline">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-2xl font-bold">자유게시판</h1>
          <Link
            href="/posts/create"
            className="bg-[#7b9467] px-4 py-2 rounded-full hover:bg-[#6a7f57] transition"
          >
            글쓰기
          </Link>
        </div>

        {/* 게시글 목록 */}
        <div className="text-[#5c4632] bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 게시글 헤더 */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-[#f6e7d8] font-semibold">
            <div className="col-span-1 text-center">번호</div>
            <div className="col-span-6">제목</div>
            <div className="col-span-2 text-center">작성자</div>
            <div className="col-span-2 text-center">작성일</div>
            <div className="col-span-1 text-center">조회</div>
          </div>

          {/* 게시글 목록 */}
          {posts.map(post => (
            <div
              key={post.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              <div className="col-span-1 text-center text-gray-600">
                {post.id}
              </div>
              <div className="col-span-6">
                <Link
                  href={`/posts/${post.id}`}
                  className="hover:text-[#7b9467]"
                >
                  {post.title}
                </Link>
              </div>
              <div className="col-span-2 text-center text-gray-600">
                {post.author.name}
              </div>
              <div className="col-span-2 text-center text-gray-600">
                {formatDate(post.createDate)}
              </div>
              <div className="col-span-1 text-center text-gray-600">
                {post.views}
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="mt-4 flex justify-center gap-2">
          <button className="px-3 py-1 rounded hover:bg-gray-100">이전</button>
          <button className="px-3 py-1 rounded bg-[#7b9467] text-white">
            1
          </button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">다음</button>
        </div>
      </div>
    </div>
  );
}
