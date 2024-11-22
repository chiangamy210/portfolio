import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-[#1e2621] overflow-auto">
      <div className="flex justify-around text-white text-[9rem] font-inter">
        <div className="mt-32">
          <h1 className=" leading-none">Hi, </h1>
          <h1 className=" leading-none">I'm Amy</h1>
          <h1 className="my-8 text-4xl">Software Development Engineer</h1>
          <Navbar />
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
        <section id="projects" className="my-32">
          <Projects />
        </section>
        <section id="games" className="my-32">
          <Games />
        </section>
        <section id="skills" className="my-32">
          <Skills />
        </section>
        <section id="contact" className="my-32">
          <Contact />
        </section>
      </div>
    </main>
  );
}

//TODO make component disappear smoothly
