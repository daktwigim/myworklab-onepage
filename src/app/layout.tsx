import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "마이워크랩",
  description: "사람들에게 하고 싶은 일을 찾아주고 그들이 즐겁고 의미 있게 일하는 세상을 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://myworklab.com"
        />
        <meta
          property="og:title"
          content="마이워크랩"
        />
        <meta
          property="og:image"
          content="/assets/thumbnail.png"
        />
        <meta
          property="og:description"
          content="사람들에게 하고 싶은 일을 찾아주고 그들이 즐겁고 의미 있게 일하는 세상을 만듭니다."
        />
        <meta
          property="og:site_name"
          content="마이워크랩"
        />
        <meta
          property="og:locale"
          content="ko_KR"
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="630"
        />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-0 left-0 w-full p-4 flex justify-center items-center">
          <span className="text-zinc-500 text-sm">Copyright 2024. 유덕수. All rights reserved.</span>
        </footer>
      </body>
    </html>
  );
}
