import {TailwindIcon,ReactIcon,NextIcon,CssIcon,JavaScriptIcon,JavaIcon, SqlIcon, SpringbootIcon} from '../components/Icons';
import Link from 'next/link';

export default function Skills() {
  const hoverColor = 'fill-red-600';
   const iconColor = 'fill-white'
  return (
    <main className="p-12">
      <h1 className="flex pb-12 justify-start text-white text-5xl font-inter">
        Skills
      </h1>
      <div className=" w-full h-[300px] xl:w-[1280px] text-white">
        <div className="grid gap-y-3 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-30  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 ">
          <div>
            <Link href="https://www.javascript.com/" title="JavaScript" className="flex justify-center items-center">
              <JavaScriptIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
          <div>
            <Link href="https://reactjs.org/" title="React" className="flex justify-center items-center">
              <ReactIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
          <div>
            <Link href="https://nextjs.org/" title="Next.js" className="flex justify-center items-center">
              <NextIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
          <div>
            <Link href="https://tailwindcss.com/" title="TailwindCSS" className="flex justify-center items-center">
              <TailwindIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
          <div>
            <Link href="https://www.w3.org/Style/CSS/" title="CSS" className="flex justify-center items-center">
              <CssIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
          <div>
            <Link href="https://www.java.com/" title="Java" className="flex justify-center items-center">
              <JavaIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
          <div>
            <Link href="https://spring.io/" title="Spring Boot" className="flex justify-center items-center">
              <SpringbootIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
          <div>
            <Link href="https://www.sql.org/" title="SQL" className="flex justify-center items-center">
              <SqlIcon className={`${iconColor} hover:${hoverColor}`} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
