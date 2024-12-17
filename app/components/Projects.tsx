import Carousel from "./Carousel";

export default function Projects() {
  const carouelProject=[
    { id: 1, src: "/projects/staybooking/staybooking.gif", alt: "staybooking gif demo", link: "https://youtu.be/PgOib85Mgg4" },
    { id: 2, src: "/projects/swapspot/swapspot.gif", alt: "swap spot gif demo", link: "https://youtu.be/a9vSveHpN0o" },
    { id: 3, src: "/games/family/familyPic.png", alt: "Family game scene", link: "/games/family" },
    { id: 4, src: "/games/verb/verbPic.png", alt: "Verb game scene", link: "/games/verb" },
  ]
  return (

    <main className="flex flex-wrap p-12 justify-between text-white text-5xl font-inter ">
      <div className="flex flex-wrap flex-col items-center justify-center my-12  gap-y-2 w-[500px] md:w-[800px]">
        <h1>project Title</h1>
        <p className="text-2xl text-gray-400">project description</p>
      </div>
      <div className="flex flex-wrap  gap-y-10 gap-x-12 gap-y-2 w-[500px] md:w-[800px] ">
        <Carousel images={carouelProject} className='flex justify-between items-center w-[380px] md:w-[800px] mb-2 '/>
      </div>  
    </main>
     
  );
}

//change ui to more stylish
//fix ipad problem
//flex-wrap smoothier on skills
//images width warning
//deploy insight reader
//add more project
