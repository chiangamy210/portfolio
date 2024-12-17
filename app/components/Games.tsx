import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";

export default function Games() {
  const carouselImages = [
    { id: 1, src: "/games/tetris/tetrisPic.png", alt: "Block fun", link: "/games/tetris" },
    { id: 2, src: "/games/snake/snakePic.png", alt: "Snake game scene", link: "/games/snake" },
    { id: 3, src: "/games/family/familyPic.png", alt: "Family game scene", link: "/games/family" },
    { id: 4, src: "/games/verb/verbPic.png", alt: "Verb game scene", link: "/games/verb" },
    { id: 5, src: "/games/number/numberPic.png", alt: "Number game scene", link: "/games/number" },
  ]
  
  return (
    <main className="flex flex-col p-12 justify-start text-white text-5xl font-inter ">
      {/* <h1 className="flex py-12 ">
        Games
      </h1> */}
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col items-center justify-center my-2  gap-y-2 w-[500px] md:w-[800px]">
          <h1>From Game to Code: My Unity Adventures</h1>
          <p className="text-2xl text-gray-400">I’ve also dived into self-learning Unity and C# to create some tiny games. The process of building these games has been such an exciting adventure—it’s where I truly discovered just how fun and rewarding programming can be!</p>
        </div>
        <div >
          <Carousel images={carouselImages} className='flex justify-between items-center w-[380px] md:w-[800px] mb-2'/>
        </div>
      </div>
     
    </main>
  );
}
