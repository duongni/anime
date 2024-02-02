import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimeCard = ({ anime, index }: Prop) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="flex flex-col max-w-sm rounded relative w-full"
    >
      <div>
        <Image
          src={`https://shikimori.one/${anime.image.original}`}
          alt={anime.name}
          width={300}
          height={500}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="flex flex-col py-2">
        <div className="flex flex-row justify-between">
          <h2 className="text-white font-bold text-base capitalize line-clamp-1 w-full">
            {anime.name.replace(/_/g, " ")}
          </h2>
          <div className="py-1 px-2  bg-[#161921] rounded-md">
            <p className="text-white text-sm font-normal capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-1">
            <Image src="/episodes.svg" width={20} height={20} alt="episodes" />
            <p className="flex text-white font-bold text-base">
              {anime.episodes}
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <Image src="/star.svg" width={15} height={15} alt="stars" />
            <p className="flex text-base font-bold text-[#FFAD49]">
              {anime.score}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;
