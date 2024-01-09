"use client";
import { TParams } from "@/types";
import React from "react";
import { useQuery } from "@apollo/client";
import LoadingSkeleton from "@/components/home/LoadingSkeleton";
import { GET_BLOG } from "@/graphql/queries";
import Markdown from "@/components/home/Markdown";
import Comments from "@/components/home/Comments";
import UserComponent from "@/components/home/UserComponent";
import Floating from "@/components/home/Floating";

export default function SINGLEBLOG({ params: { blogId } }: TParams) {
  const { data, loading, error } = useQuery(GET_BLOG, {
    variables: { id: blogId },
  });
  const markdown = data?.blog?.content;
  if (loading)
    return (
      <div>
        <LoadingSkeleton />
      </div>
    );
  if (error) return <div>{error.message}</div>;
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${data?.blog.imageUrl})`,
        }}
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              {data?.blog.title}
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                <UserComponent userId={data?.blog.userId} />
              </a>
            </p>

            <blockquote className="border-l-4 text-base font-thin leading-8 my-5 p-5">
              {markdown && <Markdown>{markdown}</Markdown>}
              {/* <MarkdownPreview source={markdown} /> */}
            </blockquote>
          </div>
        </div>
      </div>
      <div>
        <Comments blogId={blogId} />
      </div>
      <section className="sticky bottom-3 flex justify-center content-center w-full h-16 z-40">
        <Floating />
      </section>
    </div>
  );
}
