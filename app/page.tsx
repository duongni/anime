import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import Hero from "@/components/Hero";
import { data } from "./_data";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="text-white text-2xl font-bold tracking-wider md:p-20 py-10 px-6">
        Explore Anime
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {data.map((item: AnimeProp, index) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>
      </div>
    </main>
  );
}
