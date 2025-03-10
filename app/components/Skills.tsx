import {
  TailwindIcon,
  ReactIcon,
  NextIcon,
  CssIcon,
  JavaScriptIcon,
  JavaIcon,
  PostgresSqlIcon,
  NodejsIcon,
  SpringbootIcon,
} from "../components/Icons";
import Link from "next/link";

export default function Skills() {
  const skills = [
    {
      Icon: JavaScriptIcon,
      href: "https://www.javascript.com/",
      title: "JavaScript",
    },
    { Icon: ReactIcon, href: "https://reactjs.org/", title: "React" },
    { Icon: NextIcon, href: "https://nextjs.org/", title: "Next.js" },
    { Icon: NodejsIcon, href: "https://nodejs.org/en", title: "Node.js" },
    {
      Icon: TailwindIcon,
      href: "https://tailwindcss.com/",
      title: "TailwindCSS",
    },
    { Icon: CssIcon, href: "https://www.w3.org/Style/CSS/", title: "CSS" },
    { Icon: JavaIcon, href: "https://www.java.com/", title: "Java" },
    {
      Icon: SpringbootIcon,
      href: "https://spring.io/projects/spring-boot",
      title: "Spring Boot",
    },
    {
      Icon: PostgresSqlIcon,
      href: "https://www.postgresql.org/",
      title: "PostgreSQL",
    },
  ];
  return (
    <main className="flex flex-wrap  justify-between ">
      <div className="flex flex-col flex-wrap  mb-2 items-center justify-center w-full md:w-[40vw] md:order-2">
        <h1>Skills</h1>
        <p className="text-xl text-gray-500">
          I specialize in creating responsive frontends, seamless web
          applications, and robust backend services, leveraging diverse skills
          and tools.
        </p>
      </div>
      <div className="flex flex-wrap  gap-y-10 gap-x-10 w-full  md:w-[45vw] md:order-1">
        {skills.map((skill, index) => (
          <Link
            key={index}
            href={skill.href}
            target="_blank"
            title={skill.title}
          >
            <skill.Icon className="skill" />
          </Link>
        ))}
      </div>
    </main>
  );
}
