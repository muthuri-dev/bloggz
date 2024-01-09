"use client";
import React, { useEffect, useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import Button from "@/components/ui/Button";

interface BlockNoteComponentProps {
  setMarkdown: (value: string) => void;
}

function BlockNoteComponent({ setMarkdown }: BlockNoteComponentProps) {
  const editor: BlockNoteEditor = useBlockNote({
    onEditorContentChange: (editor) => {
      const saveBlocksAsMarkdown = async () => {
        const markdown: string = await editor.blocksToMarkdownLossy(
          editor.topLevelBlocks
        );
        setMarkdown(markdown);
      };
      saveBlocksAsMarkdown();
    },
  });

  return <BlockNoteView editor={editor} theme={"light"} />;
}

export default function Write() {
  const [markdown, setMarkdown] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mb-12 md:mb-32 md:pt-14 ">
      {isClient && <BlockNoteComponent setMarkdown={setMarkdown} />}
      <div className="mt-9 flex justify-center ">
        <Button method={() => console.log(markdown)} type="solid">
          Publish Blog
        </Button>
      </div>
    </div>
  );
}
// import React from "react";
// import { BlockNoteEditor } from "@blocknote/core";
// import { BlockNoteView, useBlockNote } from "@blocknote/react";
// import "@blocknote/react/style.css";
// import Button from "@/components/ui/Button";

// export default function Write() {
//   const [markdown, setMarkdown] = React.useState<string>("");
//   // Creates a new editor instance.
//   const editor: BlockNoteEditor = useBlockNote({
//     // Listens for when the editor's contents change.
//     onEditorContentChange: (editor) => {
//       // Converts the editor's contents from Block objects to Markdown and
//       // saves them.
//       const saveBlocksAsMarkdown = async () => {
//         const markdown: string = await editor.blocksToMarkdownLossy(
//           editor.topLevelBlocks
//         );
//         setMarkdown(markdown);
//       };
//       saveBlocksAsMarkdown();
//     },
//   });
//   return (
//     <div className="mb-12 md:mb-32 md:pt-14 ">
//       <BlockNoteView editor={editor} theme={"light"} />
//       <div className="mt-9 flex justify-center ">
//         <Button method={() => console.log(markdown)} type="solid">
//           Publish Blog
//         </Button>
//       </div>
//     </div>
//   );
// }
