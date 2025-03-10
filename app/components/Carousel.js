import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

export default function Carousel({
  images,
  currentSlide,
  setCurrentSlide,
  className,
}) {
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={`flex flex-col relative overflow-hidden ${className}`}>
      <div>
        {/* Left Arrow */}
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 z-20 text-3xl hover:text-gray-700"
        />

        {/* Carousel Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image) => (
              <Link
                href={image.link}
                target="_blank"
                key={image.id}
                className="w-full flex-shrink-0"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <AiOutlineRight
          onClick={handleNextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 z-20 text-3xl hover:text-gray-700"
        />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-all ${
              index === currentSlide ? "bg-gray-700 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
