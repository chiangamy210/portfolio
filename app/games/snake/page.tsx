
export default function Page() {
    return (
      <main className="flex flex-col py-20 bg-[#1e2621] text-white">
        <h1 className="text-center text-7xl pb-10">Snake Game - Mandarin color learning</h1>
        <div className="flex justify-center items-center flex-grow">
          <iframe
            width="1500"
            height="700"
            src="/games/snake/index.html"
          ></iframe>
        </div>
        <h2 className="text-center text-2xl mb-10">This is a snake Game that I used to play in an old cell phone. I combine the snake game idea with Mandarin color sound and charactor matching.</h2>
        <h2 className="text-center text-2xl mb-10">Have fun!</h2>
      </main>
    );
  }


