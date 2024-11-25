"use client";

import clsx from "clsx";
import Link from "next/link";

export default function Navbar({
  handleClick,
  activeHash,
  isVisible,
  isFixed,
}) {
  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "games", label: "Games" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav>
      <div
        className={`flex py-7 gap-4 justify-start w-full h-[100px] text-white text-2xl bg-[#1e2621] transition-all duration-1000 ease-in-out ${
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
    </nav>
  );
}
