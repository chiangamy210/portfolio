"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MeInfo from "./components/MeInfo";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Page() {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isHelloVisible, setIsHelloVisible] = useState(true);
  const [isIAmVisible, setIsIAmVisible] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 100) {
        setIsHelloVisible(false);
        setIsIAmVisible(true);
      } else {
        setIsHelloVisible(true);
        setIsIAmVisible(false);
      }
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
        if (section && section.id && `#${section.id}` !== activeHash) {
          setActiveHash(`#${section.id}`);
          window.history.pushState(null, "", `#${section.id}`);
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeHash]);

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
          <About isHelloVisible={isHelloVisible} isIAmVisible={isIAmVisible} />
          <MeInfo />
        </header>
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
