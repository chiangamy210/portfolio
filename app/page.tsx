"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MeInfo from "./components/MeInfo";
import Navbar from "./components/Navbar";

export default function Page() {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
        setIsVisible(true);
      } else {
        setIsFixed(false);
        setIsVisible(false);
        setActiveHash("");
        window.history.pushState(null, "", window.location.pathname);
      }

      var elem = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );

      if (elem) {
        const section = elem.closest("section");
        if (section && section.id) {
          setActiveHash(`#${section.id}`);
          window.history.pushState(null, "", `#${section.id}`);
        }
      }
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setActiveHash(`#${id}`);
      window.history.pushState(null, "", `#${id}`);
    }
  };
  return (
    <main
      className="flex min-h-screen flex-col p-5 md:p-12 text-gray-900 overflow-auto"
      style={{ background: `url(/bg.png)`, backgroundSize: "cover" }}
    >
      <Navbar
        handleClick={handleClick}
        activeHash={activeHash}
        isVisible={isVisible}
        isFixed={isFixed}
      />
      <div className="flex justify-around  text-8xl ">
        <header id="about" className="flex flex-col justify-center items-start">
          <h1>I'm Amy</h1>
          <section className="my-8 text-3xl">
            Software Development Engineer
          </section>
          <MeInfo />
        </header>
        <div className="my-8 ml-6 relative w-[500px] h-[300px]">
          <Image
            src="/img/evil-rabbit.png"
            alt="Amy portait"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            className="rounded-lg  object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col my-32  text-gray-700 text-4xl">
        <section id="projects" className="my-32">
          <Projects />
        </section>
        <section id="games" className="my-64">
          <Games />
        </section>
        <section id="skills" className="my-32">
          <Skills />
        </section>
      </div>
    </main>
  );
}

//TODO tools add grey bg and change color
