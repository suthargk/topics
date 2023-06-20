import { EditorContent } from "@tiptap/react";
import MenuBar from "./MenuBar";

const TipTapEditor = ({ editor }) => {
  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;
