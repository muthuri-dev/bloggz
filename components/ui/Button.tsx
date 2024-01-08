import React from "react";

interface IButton {
  children: String | React.ReactNode;
  type: "outline" | "solid";
  method: () =>
    | void
    | React.MouseEventHandler<HTMLButtonElement>
    | React.ReactNode;
}
export default function Button({ children, method, type }: IButton) {
  return (
    <div>
      <button
        onClick={method}
        className={
          type === "outline"
            ? "bg-transparent hover:bg-blue-500 text-blue-700 font-mono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            : "bg-blue-500 hover:bg-blue-700 text-white font-mono py-2 px-4 rounded"
        }
      >
        {children}
      </button>
    </div>
  );
}
