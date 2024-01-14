"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function Providers({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: `${window.location.href}/api/graphql`,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
