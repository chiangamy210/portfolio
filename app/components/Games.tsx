import Image from "next/image";
import Link from "next/link";

export default function Games() {
  return (
    <main className="flex flex-col p-12 justify-start text-white text-5xl font-inter ">
      <h1 className="flex py-12 ">
        Games
      </h1>
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        <Link href="/games/tetris" target="_blank">
          <Image src="/tetris_portfolio/pics/title.png" alt="block fun" width={200} height={100}></Image>
          <Image src="/tetris_portfolio/pics/playscene.png" alt="tetris game scene" width={200}height={250}></Image>
        </Link>
       
        <Link href="/games/snake" target="_blank" >
          {/* <Image src="/snake/snakePic.png" alt="block fun" width={200} height={100}></Image> */}
          <Image src="/snake/snakePic.png" alt="snake game scene" width={200}height={350}></Image>
        </Link>

        <Link href="/games/family" target="_blank" >
          {/* <Image src="/tetris_portfolio/pics/title.png" alt="block fun" width={200} height={100}></Image> */}
          <Image src="/family/familyPic.png" alt="family game scene" width={200}height={350}></Image>
        </Link>

        <Link href="/games/tetris" >
          <Image src="/tetris_portfolio/pics/title.png" alt="block fun" width={200} height={100}></Image>
          <Image src="/tetris_portfolio/pics/playscene.png" alt="game scene" width={200}height={250}></Image>
        </Link>
      </div>
    </main>
  );
}
