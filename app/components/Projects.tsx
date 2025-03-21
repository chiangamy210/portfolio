"use client";

import Carousel from "./Carousel";
import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselProject = [
    {
      id: 1,
      src: "/projects/insightReader/insightReader.gif",
      alt: "Insight Reader gif demo",
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
  ];

  const projectsDescription = [
    {
      id: 1,
      title: "Insight Reader",
      tools: "React, NodeJS, Mui, Gemini, Vercel, Cloudinary",
      instruction: "click picture to try",
      description:
        "It's an AI chat platform combined with the function of pdf reading. Deployed on Vercel and the pdf files stored on Cloudinary makes users experience the AI helper on different devices anytime.",
    },

    {
      id: 2,
      title: "SWAP SPOT",
      description:
        " It is a Second-Hand Trading website project. Collaborated with a team using Spring Boot environment and JWT authentication.",
      tools: "React, Java, AntDesign",
      instruction: "click picture to watch full demo",
    },
    {
      id: 3,
      title: "STAYBOOKING",
      tools: "React, JAVA, AntDesign",
      instruction: "click picture to watch full demo",
      description:
        "It's a Stay Rental web project which is designed and developed a dynamic one-page online application, leveraging React for frontend and Spring Boot for backend services. Integrated PostgreSQL for reservation management, Google Cloud Storage for media, and PostGIS for geo-based searches, ensuring scalability and reliability through deployment on Google Cloud Run.",
    },
  ];

  return (
    <main className="flex flex-wrap flex-col justify-center items-center">
      <div className="flex flex-col md:items-center justify-center gap-y-2 sm:px-[0%] md:px-[10%] xl:px-[20%] ">
        <div
          key={projectsDescription[currentSlide].id}
          className="mb-4  h-[45vh] sm:h-[30vh] md:h-[30vh] lg:h-[25vh] overflow-y-auto"
        >
          <h1 className="flex  justify-center">
            {projectsDescription[currentSlide].title}
          </h1>
          <p className="flex justify-center text-base text-gray-500 my-2 ">
            {projectsDescription[currentSlide].description}
          </p>
          <p className="flex justify-center text-xl text-gray-500 font-semibold ">
            {projectsDescription[currentSlide].tools}
          </p>
        </div>
        <Carousel
          images={carouselProject}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          className="flex justify-between items-center mb-2 "
        />
        <p className="flex justify-center text-sm text-gray-500  ">
          {projectsDescription[currentSlide].instruction}
        </p>
      </div>
    </main>
  );
}
