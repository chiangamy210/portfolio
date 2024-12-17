
export default function Page() {
    return (
      <main className="flex flex-col py-20 bg-[#1e2621] text-white">
        <h1 className="text-center text-7xl pb-10">Mail delivery Game - Mandarin family learning</h1>
        <div className="flex justify-center items-center flex-grow">
          <iframe
            width="1500"
            height="700"
            src="/games/family/index.html"
          ></iframe>
        </div>
        <h2 className="text-center text-2xl mb-10">In this game, you are a Corgi who help deliver mail to each family member.</h2>
        <h2 className="text-center text-2xl mb-10">Have fun!</h2>
      </main>
    );
  }


