import Image from "next/image";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

export default function Carousel({
  images,
  currentSlide,
  setCurrentSlide,
  className,
}) {
  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    // <div className="flex flex-col">
    <div className={className}>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className=" left-0 m-auto  inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="relative  w-full overflow-hidden  rounded-2xl">
        {images.map((image, index) => {
          if (index === currentSlide) {
            return (
              <Link href={image.link} target="_blank" key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="animate-fadeIn "
                />
              </Link>
            );
          }
        })}
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className=" right-0 m-auto  inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      {/* </div> */}
      {/* <div className="flex justify-center w-full ">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div> */}
    </div>
  );
}
