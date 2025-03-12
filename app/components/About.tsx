export default function About({ isHelloVisible, isIAmVisible }: AboutProps) {
  return (
    <>
      <div
        className={`text-blue-500 transition-all duration-500 ease-in-out ${
          isHelloVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Hello
      </div>
      <div
        className={`text-blue-500 transition-all duration-500 ease-in-out ${
          isHelloVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        I AM
      </div>
      <div className={`text-blue-500 transition-all duration-500 ease-in-out `}>
        {isHelloVisible ? "Amy" : "Alan"}
      </div>
    </>
  );
}
