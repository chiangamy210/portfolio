"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiDocumentDownload } from "react-icons/hi";
export default function MeInfo() {
  const infoItem = [
    {
      title: "download cv",
      icon: HiDocumentDownload,
      href: "https://github.com/chiangamy210",
    },
    {
      title: "github",
      icon: FaGithub,
      href: "https://github.com/chiangamy210",
    },
    {
      title: "email",
      icon: MdOutlineMailOutline,
      href: "chiangyenhui@gmail.com",
    },
    {
      title: "linkedin",
      icon: FaLinkedin,
      href: "https://github.com/chiangamy210",
    },
  ];
  return (
    <div className="flex justify-center gap-4 my-8 text-3xl">
      {infoItem.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          title={item.title}
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <item.icon className="contactInfo" />
        </Link>
      ))}
    </div>
  );
}
