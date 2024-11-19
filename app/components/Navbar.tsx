"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
        setIsVisible(true);
        console.log(">500", scrollY);
      } else {
        setIsFixed(false);
        setIsVisible(false);
        console.log("<500", scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <main>
      <div
        className={`flex my-7 gap-4 justify-start text-white text-2xl transition-all duration-1000 ease-in-out ${
          isFixed ? "fixed top-0" : "relative"
        }
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <Link href="#projects" onClick={(e) => handleClick(e, "projects")}>
          Projects
        </Link>
        <Link href="#games" onClick={(e) => handleClick(e, "games")}>
          Games
        </Link>
        <Link href="#skills" onClick={(e) => handleClick(e, "skills")}>
          Skills
        </Link>
        <Link href="#contact" onClick={(e) => handleClick(e, "contact")}>
          Contact
        </Link>
      </div>
    </main>
  );
}
