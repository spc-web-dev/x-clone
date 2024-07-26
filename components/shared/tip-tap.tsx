"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./style-tiptap.css";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

type Props = {
    setInputText: any
}

const Tiptap = ({ setInputText }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "What is happening?!",
      }),
    ],
    immediatelyRender: false,
  });

  const input =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

    useEffect(()=>{
        setInputText(input)
    },[input])

  return <EditorContent editor={editor} />;
};

export default Tiptap;
