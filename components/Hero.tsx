import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-hero hero-opacity bg-cover bg-center bg-no-repeat px-32 py-16 sm-p-16 h-[650px] lg:items-center max-lg:flex-col w-full flex justify-center items-center sm:gap-16 gap-0">
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <div className="flex flex-1 flex-col gap-10 items-left">
          <Image
            src="/logo.svg"
            alt="logo"
            height={100}
            width={100}
            className="object-contain"
          />
          <h1 className=" text-white sm:text-6xl text-5xl font-bold tracking-widest shadow-2xl leading-[120%] text-left">
            Explore The <span className="red-gradient">Diverse Realms</span> of
            Anime Magic
          </h1>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <Image src="/anime.png" alt="anime" height={650} width={550} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
