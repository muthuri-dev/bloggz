import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_USER } from "@/graphql/queries";

export default function UserComponent({ userId }: { userId: string }) {
  const { data } = useQuery(GET_BLOG_USER, { variables: { id: userId } });

  return <h3 className="text-slate-600">{data?.user.name}</h3>;
}
