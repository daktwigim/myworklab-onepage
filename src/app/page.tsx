"use client";

import Image from "next/image";
import { ReactEventHandler, useEffect, useRef, useState } from "react";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoState, setVideoState] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  function checkLoadStatus(video: HTMLVideoElement) {
    const readyState = video.readyState;
    console.log('check Status:: ', readyState)
    setVideoState(readyState);

    switch (readyState) {
      case 0:
        console.log("No information is available about the media resource.");
        break;
      case 1:
        console.log("Enough of the media resource has been retrieved that the metadata attributes are initialized.");
        break;
      case 2:
        console.log("Data is available at the current playback position.");
        break;
      case 3:
        console.log("Data for the current playback position as well as for at least a little bit ahead is available.");
        break;
      case 4:
        console.log("Enough data is available for the media resource to be played through to the end without interruption.");
        break;
      default:
        console.log("Unknown readyState:", readyState);
        break;
    }
  }

  useEffect(() => {
    const video = videoRef.current;
    console.log(video);
    if (video) {
      checkLoadStatus(video)
    }
  }, []);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     checkLoadStatus(video);
  //   }
  // }, [videoLoaded]);

  return (
    <main className="flex h-full flex-col items-center justify-center p-4 overscroll-none">
      {/* Backgroud Image and Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 transition-all duration-75">
        {/* Background darkter fillter */}
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950/80 z-50"></div>
        {/* Background Video */}
        <video
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          loop
          onCanPlay={(event) => {
            checkLoadStatus(event?.currentTarget);
          }}
          onLoad={(event) => {
            checkLoadStatus(event?.currentTarget);
          }}
          onLoadedData={(event) => {
            checkLoadStatus(event?.currentTarget);
          }}
          ref={videoRef}
        >
          <source
            src="/video/background.mp4"
            type="video/mp4"
          />
        </video>
        {/* Background Image Thumbnail */}
        {videoState === 0 && (
          <Image
            className="absolute top-0 left-0 object-cover"
            src="/img/background.png"
            fill
            alt="배경 이미지"
          />
        )}
      </div>

      {/* Contents */}
      <div className="container lg:max-w-4xl flex flex-col justify-center">
        <Image
          className="mb-2 w-[220px] lg:w-[280px]"
          src="/img/logo.svg"
          alt="마이워크랩"
          width={380}
          height={50}
        />
        <h2 className="text-lg text-white lg:text-2xl mb-8">
          &#34;사람들에게 하고 싶은 일을 찾아주고,
          <br /> 그들이 경제적 자유를 바탕으로 즐겁고 의미 있게 일하는 세상을 만듭니다&#34;
        </h2>
        <ul className="flex gap-4 flex-col lg:flex-row text-white">
          <li className="flex-1 border rounded-lg p-3 cursor-pointer hover:bg-zinc-50/10 transition-all">
            <a
              className="flex-1 flex lg:flex-col justify-center items-center"
              href="https://deoksoo.notion.site/myworklab-8262384deab2470ea2ca8ee3cb705447"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-8 lg:w-12"
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
          <li className="flex-1 border rounded-lg p-3 cursor-pointer hover:bg-zinc-50/10 transition-all">
            <a
              className="flex lg:flex-col justify-center items-center"
              href="https://deoksoo.notion.site/96abcfd45c384671a5f27610c92870cc"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-8 lg:w-12"
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
          <li className="flex-1 border rounded-lg p-3 cursor-pointer hover:bg-zinc-50/10 transition-all">
            <a
              className="flex lg:flex-col justify-center items-center"
              href="https://mywork.stibee.com/"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-8 lg:w-12"
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
          <li className="flex-1 border rounded-lg p-3 cursor-pointer hover:bg-zinc-50/10 transition-all">
            <a
              className="flex lg:flex-col justify-center items-center"
              href="https://www.instagram.com/myworkyds/"
            >
              <Image
                className="lg:mb-2 mr-4 lg:mr-0 w-8 lg:w-12"
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
