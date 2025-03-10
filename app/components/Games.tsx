"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import { useState } from "react";

export default function Games() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      id: 1,
      src: "/games/tetris/tetrisPic.png",
      alt: "Block fun",
      link: "/games/tetris",
    },
    {
      id: 2,
      src: "/games/snake/snakePic.png",
      alt: "Snake game scene",
      link: "/games/snake",
    },
    {
      id: 3,
      src: "/games/family/familyPic.png",
      alt: "Family game scene",
      link: "/games/family",
    },
    {
      id: 4,
      src: "/games/verb/verbPic.png",
      alt: "Verb game scene",
      link: "/games/verb",
    },
    {
      id: 5,
      src: "/games/number/numberPic.png",
      alt: "Number game scene",
      link: "/games/number",
    },
  ];

  return (
    <main className="flex flex-wrap justify-between ">
      <div className="flex  flex-col items-center justify-center mb-12 gap-y-2 w-full lg:w-[45vw] ">
        <h1>My Unity Adventures</h1>
        <p className="text-xl text-gray-500">
          I am self-taught in game development and have created several small
          web games, which allowed me to explore programming logic, user
          interaction, and design principles.
        </p>
        <p className="text-xl text-gray-500 font-semibold">C#, Unity</p>
      </div>
      <div className="flex flex-col items-center">
        <Carousel
          images={carouselImages}
          className="flex  justify-around items-center w-[90vw] lg:w-[45vw]  mb-2"
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
        />

        <p className="text-sm text-gray-500">click the picture to play</p>
      </div>
    </main>
  );
}
