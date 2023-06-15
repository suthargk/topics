import { EditorContent } from "@tiptap/react";
import MenuBar from "./MenuBar";

const TipTapEditor = ({ editor }) => {
  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default TipTapEditor;
