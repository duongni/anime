import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import Hero from "@/components/Hero";
import { data } from "./_data";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <h3 className="md:px-20 py-10 px-6 text-white text-2xl font-bold tracking-wider justify-left mx-auto max-w-[1677px]">
        Explore Anime
      </h3>
      <div className=" md:px-20  px-6 pb-20 flex flex-col items-center">
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-[1677px]">
          {data.map((item: AnimeProp, index) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>
      </div>
    </main>
  );
}
