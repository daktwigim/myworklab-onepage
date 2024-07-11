"use client";

import Image from "next/image";
import { ReactEventHandler, useEffect, useRef, useState } from "react";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function checkVideoLoaded(video: HTMLVideoElement) {
    console.log("video loaded");
    setVideoLoaded(true);
    video.play();
  }

  useEffect(() => {
    console.log("effected");
    const video = videoRef.current;
    console.log(video);
    if (video) {
      checkVideoLoaded(video);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Backgroud Image and Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        {/* Background darkter fillter */}
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950/80 z-50"></div>
        {/* Background Video */}
        <video
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          loop
          ref={videoRef}
        >
          <source
            src="/video/background.mp4"
            type="video/mp4"
          />
        </video>
        {/* Background Image Thumbnail */}
        {!videoLoaded && (
          <Image
            className="absolute top-0 left-0"
            src="/img/background.png"
            fill
            alt="배경 이미지"
          />
        )}
      </div>

      {/* Contents */}
      <div className="container lg:max-w-4xl">
        <Image
          className="mb-2"
          src="/img/logo.svg"
          alt="마이워크랩"
          width={380}
          height={50}
        />
        <h2 className="text-lg text-white lg:text-2xl mb-8">
          사람들에게 하고 싶은 일을 찾아주고,
          <br /> 그들이 경제적 자유를 바탕으로 즐겁고 의미 있게 일하는 세상을 만듭니다
        </h2>
        <ul className="flex gap-4 flex-col lg:flex-row text-white">
          <li className="flex-1 border rounded-lg p-3 cursor-pointer">
            <a
              className="flex-1 flex lg:flex-col justify-center items-center"
              href="https://deoksoo.notion.site/myworklab-8262384deab2470ea2ca8ee3cb705447"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-9 lg:w-12"
                src={require("@/assets/svg/myworklab.svg")}
                width={48}
                height={48}
                alt="마이워크랩 소개"
              ></Image>
              <div className="flex-1 flex justify-between">
                <span className="flex-1 lg:mr-1">마이워크랩 소개</span>
                <Image
                  className="justify-self-end"
                  src={require("@/assets/svg/link.svg")}
                  width={18}
                  height={18}
                  alt="바로가기"
                />
              </div>
            </a>
          </li>
          <li className="flex-1 border rounded-lg p-3 cursor-pointer">
            <a
              className="flex lg:flex-col justify-center items-center"
              href="https://deoksoo.notion.site/96abcfd45c384671a5f27610c92870cc"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-9 lg:w-12"
                src={require("@/assets/svg/lecture.svg")}
                width={48}
                height={48}
                alt="교육 프로그램"
              ></Image>
              <div className="flex-1 flex justify-between">
                <span className="flex-1 lg:mr-1">교육 프로그램</span>
                <Image
                  className="justify-self-end"
                  src={require("@/assets/svg/link.svg")}
                  width={18}
                  height={18}
                  alt="바로가기"
                />
              </div>
            </a>
          </li>
          <li className="flex-1 border rounded-lg p-3 cursor-pointer">
            <a
              className="flex lg:flex-col justify-center items-center"
              href="https://mywork.stibee.com/"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-9 lg:w-12"
                src={require("@/assets/svg/newsletter.svg")}
                width={48}
                height={48}
                alt="뉴스레터"
              ></Image>
              <div className="flex-1 flex justify-between">
                <span className="flex-1 lg:mr-1">뉴스레터</span>
                <Image
                  className="justify-self-end"
                  src={require("@/assets/svg/link.svg")}
                  width={18}
                  height={18}
                  alt="바로가기"
                />
              </div>
            </a>
          </li>
          <li className="flex-1 border rounded-lg p-3 cursor-pointer">
            <a
              className="flex lg:flex-col justify-center items-center"
              href="https://www.instagram.com/myworkyds/"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-9 lg:w-12"
                src={require("@/assets/svg/instagram.svg")}
                width={48}
                height={48}
                alt="인스타그램"
              ></Image>
              <div className="flex-1 flex justify-between">
                <span className="flex-1 lg:mr-1">인스타그램</span>
                <Image
                  className="justify-self-end"
                  src={require("@/assets/svg/link.svg")}
                  width={18}
                  height={18}
                  alt="바로가기"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
