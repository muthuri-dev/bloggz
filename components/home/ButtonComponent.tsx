"use client";
import React from "react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function ButtonComponent() {
  const route = useRouter();
  return (
    <Button type="solid" method={() => route.push("/blogs")}>
      Start reading
    </Button>
  );
}
