"use client";
import React from "react";
import Button from "../ui/Button";

export default function ButtonComponent() {
  return (
    <Button type="solid" method={() => console.log("clicked")}>
      Start reading
    </Button>
  );
}
