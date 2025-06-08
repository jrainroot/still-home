"use client";

import { useState } from "react";
import Image from "next/image";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";
import Link from "next/link";

export default function Home() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] p-2">
      {/* 상단 */}
      {/* <div className="flex flex-col items-center pt-12 pb-6"> */}

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e2d3bc] overflow-hidden">
            <Image
              src="/stiill_home_logo.png"
              alt="고요한 집 로고"
              width={60}
              height={60}
              priority
            />
          </div>
          <h1 className="text-xl ml-2 font-bold tracking-wide">고요한 집</h1>
        </div>
        <div className="flex text-sm gap-4 font-semibold">
          <button onClick={() => setIsLoginModalOpen(true)} className="">
            로그인
          </button>
          <button onClick={() => setIsSignUpModalOpen(true)}>회원가입</button>
        </div>
      </div>

      <div className="text-sm mx-8 text-center my-3">
        <p className="">잠시 멈춰도 괜찮아요,</p>
        <p className="">이곳은 누구도 다그치지 않는 집입니다.</p>
      </div>
      {/* <div className="flex flex-col gap-3 w-full items-center mb-8">
        <button className="bg-[#7b9467] text-white rounded-full px-8 py-2 text-lg font-semibold shadow hover:bg-[#6a7f57] transition">
          커뮤니티 돌아가기
        </button>
        <button className="bg-[#c7a887] text-white rounded-full px-8 py-2 text-lg font-semibold shadow hover:bg-[#b08d6b] transition">
          오늘의 이야기 보기
        </button>
      </div> */}

      {/* 메뉴 */}
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <Link
          href="/posts"
          className="flex flex-col items-center bg-[#f6e7d8] rounded-xl p-6 w-44 shadow hover:shadow-lg transition"
        >
          <svg width="36" height="36" fill="none" className="mb-2">
            <rect
              x="9"
              y="13"
              width="18"
              height="12"
              rx="2"
              stroke="#bfae8e"
              strokeWidth="2"
            />
            <rect x="13" y="17" width="10" height="4" rx="1" fill="#e2d3bc" />
          </svg>
          <span className="text-[#5c4632] font-semibold text-lg mb-1">
            자유게시판
          </span>
        </Link>
        <div className="flex flex-col items-center bg-[#f6e7d8] rounded-xl p-6 w-44 shadow hover:shadow-lg transition">
          <svg width="36" height="36" fill="none" className="mb-2">
            <circle cx="18" cy="18" r="8" stroke="#bfae8e" strokeWidth="2" />
            <path d="M26 26l6 6" stroke="#bfae8e" strokeWidth="2" />
          </svg>
          <span className="text-[#5c4632] font-semibold text-lg mb-1">
            익명 고민방
          </span>
        </div>
        <div className="flex flex-col items-center bg-[#f6e7d8] rounded-xl p-6 w-44 shadow hover:shadow-lg transition">
          <svg width="36" height="36" fill="none" className="mb-2">
            <path
              d="M18 28v-4a4 4 0 1 1 8 0v4"
              stroke="#bfae8e"
              strokeWidth="2"
            />
            <path d="M18 32h8" stroke="#bfae8e" strokeWidth="2" />
            <circle cx="22" cy="18" r="3" fill="#e2d3bc" />
          </svg>
          <span className="text-[#5c4632] font-semibold text-lg mb-1">
            작은 변화 챌린지
          </span>
        </div>
      </div>

      {/* 공감받은 이야기 */}
      {/* <div className="max-w-xl mx-auto w-full mb-10">
        <h2 className="text-xl font-bold text-[#5c4632] mb-4 flex items-center">
          <span className="mr-2">📌</span>지금 가장 많이 공감 받은 이야기
        </h2>
        <div className="bg-white rounded-xl shadow p-6 space-y-2">
          <div className="text-[#7b6a5e]">
            [익명] 오늘 아침, 따뜻한 밥을 먹었어요
          </div>
          <div className="text-[#7b6a5e]">[익명] 3일 만에 햇볕을 좀 봤어요</div>
        </div>
      </div> */}

      {/* 푸터 */}
      <footer className="bg-[var(--background)] py-8 text-center text-lg mt-auto">
        <div className="font-bold text-2xl mb-2">고요한 집</div>
        <div className="flex justify-center gap-6 text-base mt-2">
          <a href="#" className="hover:underline">
            소개
          </a>
          <a href="#" className="hover:underline">
            이용약관
          </a>
          <a href="#" className="hover:underline">
            개인정보처리방침
          </a>
        </div>
      </footer>

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}
