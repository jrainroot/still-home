import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "고요한 집 - 은둔형 외톨이를 위한 커뮤니티",
  description: "은둔형 외톨이와 백수들을 위한 따뜻한 커뮤니티 공간",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
