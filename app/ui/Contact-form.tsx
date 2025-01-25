"use client";

export default function ContactForm() {
  function handleSend() {
    console.log("123");
  }

  return (
    <form onSubmit={handleSend}>
      <div className="flex flex-col rounded-lg bg-white/40 px-12 pb-4 pt-8 text-xl">
        <div className="grid gap-6 md:grid-cols-2 mb-5 pb-3">
          <div className="flex flex-col ">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className=" rounded-lg w-full pb-3 "
              placeholder="What should                                          I call you?"
              required
            ></input>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@domain.com"
              className=" rounded-lg w-full"
              required
            ></input>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={4}
            className="rounded-lg w-full h-[200px]"
            placeholder="Leave me a message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mb-5 w-[90px] bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
    </form>
  );
}
