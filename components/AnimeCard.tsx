import Image from "next/image";
import { data } from "@/app/_data";

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

const AnimeCard = ({ anime }: Prop) => {
  return (
    <div className="flex flex-col max-w-sm rounded relative w-full">
      <div>
        <Image
          src={anime.image.original}
          alt={anime.name}
          width={300}
          height={500}
          className="rounded-xl"
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
    </div>
  );
};

export default AnimeCard;
