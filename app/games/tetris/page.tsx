import Image from "next/image";

export default function Page() {
    return (
      <main className="flex flex-col py-20 bg-[#1e2621] text-white">
        <h1 className="text-center text-7xl pb-10">Block Fun</h1>
        <div className="flex justify-center items-center flex-grow">
          <iframe
            width="1500"
            height="700"
            src="/tetris_portfolio/index.html"
          ></iframe>
        </div>
        <h2 className="text-center text-2xl mb-10">This is a Tetris Game. It is my favorite game and also my first game.</h2>
        <h2 className="text-center text-2xl mb-10">Have fun!</h2>
      </main>
    );
  }