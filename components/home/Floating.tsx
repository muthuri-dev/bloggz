import { BookmarkCheck, Heart, Share2, UserRoundPlus } from "lucide-react";
import React from "react";

export default function Floating() {
  return (
    <div className=" flex flex-row justify-center items-center w-4/12 rounded-2xl gap-5 bg-white bg-opacity-50 border border-black">
      <div>
        <Heart />
      </div>
      <div>
        <UserRoundPlus />
      </div>
      <div>
        <BookmarkCheck />
      </div>
      <div>
        <Share2 />
      </div>
    </div>
  );
}
