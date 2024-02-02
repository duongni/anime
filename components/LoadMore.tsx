"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";
import { animeFetch } from "@/app/action";

let page = 1;
export type AnimeCard = JSX.Element;

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (inView) {
      animeFetch(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);
  return (
    <>
      <div className=" md:px-20  px-6 pb-20 flex flex-col items-center">
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-[1677px] items-end">
          {data}
        </section>
      </div>
      <section className="flex flex-col justify-between items-center pb-20">
        <div ref={ref}>
          <Image
            src="/spinner.svg"
            alt="Loading Spinner"
            height={56}
            width={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
