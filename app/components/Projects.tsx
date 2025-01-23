"use client";

import Carousel from "./Carousel";
import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselProject = [
    {
      id: 1,
      src: "/projects/swapspot/swapspot.gif",
      alt: "Insight Reader demo",
      link: "https://insight-reader-client.vercel.app/",
    },

    {
      id: 2,
      src: "/projects/swapspot/swapspot.gif",
      alt: "swap spot gif demo",
      link: "https://youtu.be/a9vSveHpN0o",
    },
    {
      id: 3,
      src: "/projects/staybooking/staybooking.gif",
      alt: "staybooking gif demo",
      link: "https://youtu.be/PgOib85Mgg4",
    },
    {
      id: 4,
      src: "/games/verb/verbPic.png",
      alt: "Verb game scene",
      link: "/games/verb",
    },
  ];

  const projectsDescription = [
    {
      id: 1,
      title: "Insight Reader",
      tools: "React, NodeJS, Mui, Gemini, Vercel, Cloudinary",
      description: "An AI chat platform combined with pdf reader",
      instruction: "click to try",
    },

    {
      id: 2,
      title: "SWAP SPOT: Second-Hand Trading",
      description:
        "Collaborated with a team to develop a second-hand trading web app,React and Ant Design.",
      tools: "React, Java, AntDesign",
      instruction: "click to watch full demo",
    },
    {
      id: 3,
      title: "STAYBOOKING: A Seamless Stay Rental Experience",
      tools: "React, JAVA, AntDesign",
      instruction: "click to watch full demo",

      description:
        "Designed and developed a dynamic one-page online stay rental application, leveraging React for frontend and Spring Boot for backend services. Integrated PostgreSQL for reservation management, Google Cloud Storage for media, and PostGIS for geo-based searches, ensuring scalability and reliability through deployment on Google Cloud Run.",
    },
    { id: 4, title: "title", description: " Designed ." },
  ];
  return (
    <main className="flex flex-wrap flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-y-2 md:px-[10%] xl:px-[20%] ">
        <div key={projectsDescription[currentSlide].id} className="mb-12">
          <h1 className="flex  justify-center">
            {projectsDescription[currentSlide].title}
          </h1>
          <p className="flex justify-center text-xl text-gray-500 my-2">
            {projectsDescription[currentSlide].description}
          </p>
          <p className="flex justify-center text-xl text-gray-500 font-semibold">
            {projectsDescription[currentSlide].tools}
          </p>
        </div>
        <Carousel
          images={carouselProject}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          className="flex justify-between items-center mb-2 "
        />
        <p className="text-xl text-gray-400">
          {projectsDescription[currentSlide].instruction}
        </p>
      </div>
    </main>
  );
}

//change ui to more stylish
//fix ipad problem
//carousel boarder radius for project
//skill items-center, gy smaller
//project image size
