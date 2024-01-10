import { auth, signIn } from "@/auth";
import Editor from "@/components/home/Editor";
import Button from "@/components/ui/Button";
import { Github } from "lucide-react";
import React from "react";

export default async function TextEditor() {
  const session = await auth();
  if (!session) {
    return (
      <div className="h-[70%] flex justify-center items-center">
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button type="solid">
            <Github />
            Login with GitHub
          </Button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <Editor />
    </div>
  );
}
