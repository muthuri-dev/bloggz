import { BookmarkCheck, Heart, Share2, UserRoundPlus } from "lucide-react";
import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_LIKE } from "@/graphql/mutations";

export default function Floating({ blogId }: { blogId: string }) {
  //posting like
  const [addLike] = useMutation(ADD_LIKE);
  const [like, setLike] = React.useState<boolean>(false);
  const AddLike = () => {
    setLike(!like);
  };
  React.useEffect(() => {
    if (like === true) {
      addLike({ variables: { like: 1, blogId } });
    }
  }, [addLike, blogId, like]);
  return (
    <div className=" flex flex-row justify-center items-center w-4/12 rounded-2xl gap-5 bg-white bg-opacity-70 border border-black">
      <div>
        <Heart onClick={AddLike} className="cursor-pointer" />
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
