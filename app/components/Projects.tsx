"use client";

import Carousel from "./Carousel";
import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselProject = [
    {
      id: 1,
      src: "/projects/staybooking/staybooking.gif",
      alt: "staybooking gif demo",
      link: "https://youtu.be/PgOib85Mgg4",
    },
    {
      id: 2,
      src: "/projects/swapspot/swapspot.gif",
      alt: "swap spot gif demo",
      link: "https://youtu.be/a9vSveHpN0o",
    },
    {
      id: 3,
      src: "/games/family/familyPic.png",
      alt: "Family game scene",
      link: "/games/family",
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
      title: "SWAP SPOT: Second-Hand Trading",
      description:
        "Collaborated with a team to develop a second-hand trading web app, focusing on intuitive frontend design, seamless backend integration, and core functionality. From item uploads to shopping cart features, the project involved crafting an efficient and user-friendly platform using React and Ant Design.",
    },
    {
      id: 2,
      title: "STAYBOOKING: A Seamless Stay Rental Experience",
      description:
        " Designed and developed a dynamic one-page online stay rental application, leveraging React for frontend and Spring Boot for backend services. Integrated PostgreSQL for reservation management, Google Cloud Storage for media, and PostGIS for geo-based searches, ensuring scalability and reliability through deployment on Google Cloud Run.",
    },
    { id: 3, title: "title", description: " Designed " },
    { id: 4, title: "title", description: " Designed ." },
  ];
  return (
    <main className="flex flex-wrap p-12 justify-between text-5xl font-inter ">
      <div className="flex flex-col items-center justify-center gap-y-2 w-full lg:w-[45vw]">
        <div key={projectsDescription[currentSlide].id}>
          <h1>{projectsDescription[currentSlide].title}</h1>
          <p className="text-2xl text-gray-500">
            {projectsDescription[currentSlide].description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  gap-y-10 gap-x-12 gap-y-2 w-[500px] md:w-[800px] ">
        <Carousel
          images={carouselProject}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          className="flex justify-between items-center w-[380px] md:w-[800px] mb-2 "
        />
      </div>
    </main>
  );
}

//organize image size
//change ui to more stylish
//fix ipad problem
//flex-wrap smoothier on skills
//images width warning
//deploy insight reader
//carousel boarder radius for project
//add banner bg
