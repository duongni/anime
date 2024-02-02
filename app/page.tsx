import Hero from "@/components/Hero";

import { animeFetch } from "./action";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await animeFetch(1);

  return (
    <main className="">
      <Hero />
      <h3 className="md:px-20 py-10 px-6 text-white text-2xl font-bold tracking-wider justify-left mx-auto max-w-[1677px]">
        Explore Anime
      </h3>

      <LoadMore />
    </main>
  );
}
