// import React from "react";
// import ReactMarkdown from "react-markdown";

// interface IMarkdownProps {
//   markdown: string;
// }

// export default function Markdown({ markdown }: IMarkdownProps) {
//   return (
//     <blockquote className="border-l-4 text-base font-thin leading-8 my-5 p-5">
//       <ReactMarkdown>{markdown}</ReactMarkdown>
//     </blockquote>
//   );
// }

// import React from "react";
// import ReactMarkdown from "react-markdown";

// interface IMarkdownProps {
//   markdown: string;
// }

// const Markdown: React.FC<IMarkdownProps> = ({ markdown }) => {
//   return (
//     <div className="prose">
//       <ReactMarkdown>{markdown}</ReactMarkdown>
//     </div>
//   );
// };

// export default Markdown;
"use client";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-green-500 underline" target="_blank" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
