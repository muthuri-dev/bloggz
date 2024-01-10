import React from "react";
import NavComponent from "../home/NavComponent";
import { auth } from "@/auth";
import { Session } from "next-auth";

export default async function Navbar() {
  const session: Session | null = await auth();
  return (
    <div className="flex justify-between md:pl-16 md:pr-16 pt-3 pb-3 items-center z-30 shadow-md rounded-2xl sticky w-full top-0 bg-opacity-80 bg-white">
      <NavComponent session={session!} />
    </div>
  );
}
