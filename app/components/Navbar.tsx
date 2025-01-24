"use client";

import clsx from "clsx";
import Link from "next/link";

interface NavbarProps {
  handleClick: (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  activeHash: string;
  isVisible: boolean;
  isFixed: boolean;
}

export default function Navbar({
  handleClick,
  activeHash,
  isVisible,
  isFixed,
}: NavbarProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "games", label: "Games" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav>
      <div
        className={`flex z-30 my-4 p-5 gap-4 justify-between items-center w-[350px] h-[1vh] text-base md:w-[400px] md:text-xl bg-white rounded-full transition-all duration-500 ease-in-out ${
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
            className={clsx({ "text-gray-400": activeHash === `#${item.id}` })}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
