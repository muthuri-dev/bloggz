import Blog from "@/components/home/Blog";
import React from "react";
import { CategoryNav } from "@/data/data";
import Link from "next/link";
import { useQuery } from "@apollo/client";

export default function page() {
  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="col-span-6 md:col-span-4">
          <div>
            <ul className="flex flex-wrap border-b">
              {CategoryNav.map((item) => (
                <div key={item.id}>
                  <li className="mr-2">
                    <Link
                      href={item.url}
                      aria-current="page"
                      className="inline-block rounded-2xl font-thin text-slate-950 rounded-t-lg py-4 px-4 text-sm text-center"
                    >
                      {item.value}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <Blog />
          </div>
        </div>
        <div className="col-span-2 border border-l border-gray-200 font-thin hidden md:flex ">
          Trending and adverts
        </div>
      </div>
    </div>
  );
}
