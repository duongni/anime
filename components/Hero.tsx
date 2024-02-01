import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-hero hero-opacity bg-cover bg-center bg-no-repeat md:px-32 px-10 md:py-16 py-20 h-[750px] lg:items-center max-lg:flex-col w-full flex justify-center items-center sm:gap-16 gap-0">
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <div className="flex flex-1 flex-col md:gap-10 sm:gap-6 gap-6 items-left md:px-10 sm:px-5 px-0">
          <Image
            src="/logo.svg"
            alt="logo"
            height={100}
            width={100}
            className="object-contain"
          />
          <h1 className=" text-white sm:text-6xl text-4xl font-bold tracking-widest shadow-2xl leading-[120%] text-left">
            Explore The <span className="red-gradient">Diverse Realms</span> of
            Anime Magic
          </h1>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <Image
            src="/anime.png"
            alt="anime"
            height={650}
            width={550}
            className="hover:scale-125 hover:ease-in-out hover:duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
