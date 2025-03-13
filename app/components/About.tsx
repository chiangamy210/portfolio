import MeInfo from "./MeInfo";

export default function About({ locationY }: { locationY: number }) {
  return (
    <div className="flex flex-col jusitfy-center items-center gap-y-[2vh]">
      <div
        className={`transition-all duration-500 ease-in-out ${
          locationY <= 100 ? "opacity-100" : "opacity-40"
        }`}
      >
        Hello
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          locationY >= 100 && locationY < 200 ? "opacity-100" : "opacity-40"
        }`}
      >
        I'm Amy
      </div>
      <div
        className={`transition-all duration-500 ease-in-out text-3xl ${
          locationY >= 200 && locationY < 300 ? "opacity-100" : "opacity-40"
        }`}
      >
        Software Development Enginear
      </div>
      <div
        className={`text-blue-500 transition-all duration-500 ease-in-out text-3xl ${
          locationY >= 300 ? "opacity-100" : "opacity-40"
        }`}
      >
        <MeInfo />
      </div>
    </div>
  );
}
