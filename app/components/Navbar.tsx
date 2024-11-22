"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "games", label: "Games" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
        setIsVisible(true);
        // console.log(">500", scrollY);
      } else {
        setIsFixed(false);
        setIsVisible(false);
        setActiveHash(elem);
        window.history.pushState(null, "", window.location.pathname);
        // console.log("<500", scrollY);
      }

      var elem = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );

      if (elem) {
        const section = elem.closest("section");
        console.log("section", section);
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

  const handleClick = (e, id: string) => {
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
    <main>
      <div
        className={`flex my-7 gap-4 justify-start text-white text-2xl transition-all duration-1000 ease-in-out ${
          isFixed ? "fixed top-0" : "relative"
        }
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={clsx({ "text-blue-400": activeHash === `#${item.id}` })}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
//TODO  sethash to null when scroll to top
