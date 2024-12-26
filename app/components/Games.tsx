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
    <main className="flex flex-wrap justify-between text-5xl  ">
      <div className="flex  flex-col items-center justify-center mb-12 gap-y-2 w-full lg:w-[45vw] ">
        <h1>From Game to Code: My Unity Adventures</h1>
        <p className="text-2xl text-gray-500">
          I’ve also dived into self-learning Unity and C# to create some tiny
          games. The process of building these games has been such an exciting
          adventure—it’s where I truly discovered just how fun and rewarding
          programming can be!
        </p>
      </div>
      <Carousel
        images={carouselImages}
        className="flex  justify-around items-center w-[90vw] lg:w-[45vw]  mb-2"
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
      />
    </main>
  );
}
