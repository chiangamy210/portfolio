import {TailwindIcon,ReactIcon,NextIcon,CssIcon,JavaScriptIcon,JavaIcon, PostgresSqlIcon, NodejsIcon,SpringbootIcon} from '../components/Icons';
import Link from 'next/link';

export default function Skills() {
  const skills = [
    { Icon: JavaScriptIcon, href: "https://www.javascript.com/", title: "JavaScript" },
    { Icon: ReactIcon, href: "https://reactjs.org/", title: "React" },
    { Icon: NextIcon, href: "https://nextjs.org/", title: "Next.js" },
    { Icon: NodejsIcon, href: "https://nodejs.org/en", title: "Node.js" },
    { Icon: TailwindIcon, href: "https://tailwindcss.com/", title: "TailwindCSS" },
    { Icon: CssIcon, href: "https://www.w3.org/Style/CSS/", title: "CSS" },
    { Icon: JavaIcon, href: "https://www.java.com/", title: "Java" },
    { Icon: SpringbootIcon, href: "https://spring.io/projects/spring-boot", title: "Spring Boot" },
    { Icon: PostgresSqlIcon, href: "https://www.postgresql.org/", title: "PostgreSQL" },
  ];
  return (
    <main className="flex flex-wrap p-12 justify-between  text-5xl font-inter ">
     
      <div className="flex flex-wrap  gap-y-10 gap-x-12  w-[500px] lg:w-[800px] xl:w-[1200px]">
          {skills.map((skill,index)=>(
            <Link key={index} href={skill.href}  target="_blank" title={skill.title} >
            <skill.Icon className='skill' />
            </Link>
          ))}
      </div>
      <div className="flex flex-wrap  items-center justify-center my-12  gap-y-2 w-[500px] md:w-[800px]">
        <h1>Skills That Drive My Passion for Development</h1>
        <p className="text-2xl text-gray-400">I’ve honed a diverse set of skills that empower me to create seamless and innovative web applications, explore backend services, and design visually engaging interfaces. From crafting responsive frontends to building robust server-side applications, these tools fuel my love for coding.
        </p>
      </div>
    </main>
  );
}


