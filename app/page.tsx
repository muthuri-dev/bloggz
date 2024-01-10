import { auth, signIn } from "@/auth";
import ButtonComponent from "@/components/home/ButtonComponent";
import Button from "@/components/ui/Button";
import React from "react";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <section className="flex justify-center flex-col items-center mt-5 md:mt-10 p-16">
          <h1 className="font-extrabold text-black text-3xl text-center italic mb-3">
            Discover stories from writers
            <span className="text-blue-500">
              Because Every Developer Has a Story to Tell!
            </span>
          </h1>
          <p className="text-gray-700 text-center mb-3">
            Tech Stories That Ignite Your Imagination. Start Writing Yours!
          </p>
          {session ? (
            <ButtonComponent />
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <Button type="solid">Login! to start</Button>
            </form>
          )}
        </section>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-thin underline text-lg">
            Open Source Contributers
          </h1>
        </div>
      </div>
    </main>
  );
}
