
export default function Page() {
    return (
      <main className="flex flex-col py-20 bg-[#1e2621] text-white">
        <h1 className="text-center text-7xl pb-10">Selling fruit Game - Mandarin number learning</h1>
        <div className="flex justify-center items-center flex-grow">
          <iframe
            width="1500"
            height="700"
            src="/games/number/index.html"
          ></iframe>
        </div>
        <h2 className="text-center text-2xl mb-10">Help sell fruit to customers by dragging a box to each customer that matches the number they want.</h2>
        <h2 className="text-center text-2xl mb-10">Have fun!</h2>
      </main>
    );
  }


