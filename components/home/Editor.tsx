"use client";
import React, { useEffect, useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import Button from "@/components/ui/Button";
import { useMutation, useQuery } from "@apollo/client";
import { Session } from "next-auth";
import { GET_USER_BY_EMAIL } from "@/graphql/queries";
import { CREATE_BLOG } from "@/graphql/mutations";
import { useRouter } from "next/navigation";

interface BlockNoteComponentProps {
  setMarkdown: (value: string) => void;
}

function BlockNoteComponent({ setMarkdown }: BlockNoteComponentProps) {
  
  const editor: BlockNoteEditor = useBlockNote({
    onEditorContentChange: (editor) => {
      const saveBlocksAsMarkdown = async () => {
        const markdown: string = await editor.blocksToMarkdownLossy(
          editor.topLevelBlocks
        );
        setMarkdown(markdown);
      };
      saveBlocksAsMarkdown();
    },
  });

  return <BlockNoteView editor={editor} theme={"light"} />;
}

export default function Editor({ session }: { session: Session }) {
  const [markdown, setMarkdown] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  //posting data to the database
  const { data: email } = useQuery(GET_USER_BY_EMAIL, {
    variables: { email: session.user?.email },
  });
  const [createblog] = useMutation(CREATE_BLOG, { variables: {} });
  const [title, setTitle] = React.useState<string>("");
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("TECH");
    const route = useRouter();
  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title === "") return alert("Enter fields");
    createblog({
      variables: {
        title,
        imageUrl,
        category,
        content: markdown,
        userId: email?.userByEmail.id,
      },
    });
    setTitle("");
    setImageUrl("");
    setMarkdown("");
    setCategory("TECH");
    route.push("/blogs");
  };

  return (
    <div className="grid md:grid-cols-6  mb-12 md:mb-32 md:pt-14 ">
      <div className="mt-10 mb-10 md:col-span-4">
        {isClient && <BlockNoteComponent setMarkdown={setMarkdown} />}
      </div>
      <div className="md:col-span-2">
        <div className="w-full flex justify-center md:mt-14">
          <form
            onSubmit={submitData}
            className="flex flex-col gap-5 items-center w-full md:mr-5"
          >
            <div className="w-full px-3 mb-6 md:mb-0">
              <input
                className=" block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Article Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              {/* error here */}
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Image Link"
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
              />
              {/* error here */}
            </div>
            <div className="inline-block relative w-full px-3 mb-6 md:mb-0 pr-2">
              <select
                onChange={(event) => setCategory(event.target.value)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value={category}>Technology</option>
                <option value="AI_ML">Ai&Ml</option>
                <option value="JOBS">Jobs</option>
                <option value="STARTUPS">Startups</option>
                <option value="UI_UX">UI & UX</option>
                <option value="BOOKS">Books</option>
                <option value="DATABASES">DataBases</option>
                <option value="ANDROID">Android</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="mt-9 flex justify-center ">
              <Button type="solid">Publish Blog</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
