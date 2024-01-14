import { CircleUser } from "lucide-react";
import React from "react";
import UserComponent from "./UserComponent";
import { useMutation, useQuery } from "@apollo/client";
import { GET_COMMENTS, GET_USER_BY_EMAIL } from "@/graphql/queries";
import { Comment, User } from "@prisma/client";
import { CREATE_COMMENT } from "@/graphql/mutations";
import useSessionStore from "@/store/useSessionStore";

export default function Comments({ blogId }: { blogId: string }) {
  const { data: Comment } = useQuery(GET_COMMENTS);
  const comments: Comment[] = Comment?.comments;
  const [createComment] = useMutation(CREATE_COMMENT);

  //using the session store
  const sessionstore = useSessionStore();
  const { session } = sessionstore;
  //getting comment writer id from the database
  const { data } = useQuery(GET_USER_BY_EMAIL, {
    variables: { email: session?.user?.email },
  });

  //posting comments
  const [comment, setComment] = React.useState<string>("");
  const submitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createComment({
      variables: { comment, blogId, userId: data?.userByEmail?.id },
      refetchQueries: [{ query: GET_COMMENTS }],
    });
    setComment("");
  };

  return (
    <div>
      <div className="w-full bg-white rounded-lg border p-2 my-4 mx-6">
        <h3 className="font-bold">Comments</h3>
        <div className="flex flex-col">
          {comments &&
            comments.map((comment) => {
              if (comment.blogId === blogId) {
                return (
                  <div
                    className="border rounded-md p-3 ml-3 my-3"
                    key={comment.id}
                  >
                    <div className="flex gap-3 items-center">
                      <CircleUser
                        className="object-cover w-8 h-8 rounded-full 
                        border-2 border-emerald-400  shadow-emerald-400"
                      />

                      <div className="font-bold">
                        <UserComponent userId={comment.userId!} />
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{comment.comment}</p>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
        <form onSubmit={submitComment}>
          <div className="w-full px-3 my-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
          </div>
          <div className="w-full flex justify-end px-3">
            <input
              type="submit"
              className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 cursor-pointer"
              value="Post Comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
