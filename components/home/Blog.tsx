"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircleUser, MessageSquareQuote, ThumbsUp } from "lucide-react";
import { IBlogs } from "@/types";
import { useQuery } from "@apollo/client";
import { GET_BLOG_USER } from "@/graphql/queries";
import { User } from "@prisma/client";

interface IBlogProps {
  blog: IBlogs;
}

export default function Blog({ blog }: IBlogProps) {
  const { data } = useQuery(GET_BLOG_USER, { variables: { id: blog.userId } });
  const person: User = data?.user;
  const router = useRouter();
  return (
    <div
      className="m-10 flex justify-center cursor-pointer"
      onClick={() => router.push(`/blog/${blog.id}`)}
    >
      <div className=" flex flex-col bg-transparent border border-slate-300 rounded-2xl hover:border-slate-500 dark:hover:border-slate-600 dark:border-slate-800/80 p-6 my-3 w-full md:w-11/12">
        {person?.image && (
          <div className="flex gap-3 items-center">
            <Image
              src={person.image}
              width={40}
              height={40}
              alt={person.name!}
              className="rounded-lg"
            />
            <div className=" flex flex-col">
              <h1 className="font-mono text-slate-950">{person.name}</h1>
              <a
                href="#"
                className="text-sm text-slate-300 font-normal cursor-pointer hover:text-slate-600 hover:dark:text-slate-500"
              >
                Author
              </a>
            </div>
          </div>
        )}

        <div className=" flex gap-3 mt-3 flex-row">
          <div className=" flex flex-col">
            <h1 className="font-heading text-base sm:text-xl font-semibold sm:font-bold  text-slate-950 cursor-pointer">
              {blog.title}
            </h1>
            <p className="text-base font-normal text-slate-500 dark:text-slate-400 cursor-pointer line-clamp-3 md:block">
              {blog.content.slice(0, 130)}...
            </p>
          </div>
          <div className=" h-32 md:w-[1000px] rounded-md">
            <Image
              src={blog.imageUrl}
              alt="blogimage"
              width={100}
              height={500}
              className=" w-full h-full rounded-md object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4 text-slate-700 dark:text-slate-200 w-full">
          <span className="flex items-center gap-7">
            <p className=" font-mono flex text-black text-center">
              <ThumbsUp
                size={20}
                color="#000000"
                strokeWidth={1.75}
                absoluteStrokeWidth
              />
              {blog.likes?.length || 0}
            </p>
            <p className=" font-mono flex text-black text-center">
              <MessageSquareQuote
                size={20}
                color="#000000"
                strokeWidth={1.75}
                absoluteStrokeWidth
              />
              {blog.blogComments?.length || 0}
            </p>
          </span>
          <span className="flex gap-1 items-center">
            <span className=" flex flex-wrap gap-1 justify-end">
              {blog.tags?.map((tag) => (
                <p
                  key={tag.id}
                  className="rounded-full px-2 py-1 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 w-min max-w-[126px] truncate text-left"
                >
                  {tag.tag}
                </p>
              ))}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

{
  /* <CircleUser
  size={20}
  color="#000000"
  strokeWidth={1.75}
  absoluteStrokeWidth
  className=" w-10 h-10 rounded-full"
/>; */
}
