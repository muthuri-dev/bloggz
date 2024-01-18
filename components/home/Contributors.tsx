"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IContributer<T> {
  id: T;
  avatar_url: string;
  html_url: string;
}
export default function Contributors() {
  const [contributers, setContributers] = React.useState<
    IContributer<number>[]
  >([]);

  //fetching array of contributers
  const url = "https://api.github.com/repos/muthuri-dev/bloggz/contributors";
  React.useEffect(() => {
    async function getContributers() {
      const response = await fetch(url);
      if (response.ok) {
        const result: IContributer<number>[] = await response.json();
        setContributers(result);
      } else {
        return null;
      }
    }
    getContributers();
  }, []);
  return (
    <div className=" flex justify-center items-center w-full gap-3 flex-wrap">
      {contributers &&
        contributers.map((contributer) => {
          return (
            <div key={contributer.id} className="flex flex-wrap flex-row ">
              <Link href={contributer.html_url}>
                <Image
                  src={contributer.avatar_url}
                  alt="contributer"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
}
