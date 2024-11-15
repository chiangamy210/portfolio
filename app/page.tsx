import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Skills from "./components/Skills";
import Contacts from "./components/Contact";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-[#1e2621] overflow-auto">
      <div className="flex justify-around text-white text-[9rem] font-inter">
        <div className="my-32">
          <h1>Hi, </h1>
          <h1>I'm Amy</h1>
          <h1 className="py-1 text-4xl">Software Development Engineer</h1>
        </div>
        <div className="my-32">
          <Image
            src="/customers/evil-rabbit.png"
            alt="Amy portait"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col my-32 text-2xl  text-white">
        <div className="my-32">
          <Projects />
        </div>
        <div className="my-32">
          <Games />
        </div>
        <div className="my-32">
          <Skills />
        </div>
        <div className="my-32">
          <Contacts />
        </div>
      </div>
    </main>
  );
}
