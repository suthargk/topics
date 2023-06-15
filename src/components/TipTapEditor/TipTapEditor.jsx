import { EditorContent } from "@tiptap/react";
import MenuBar from "./MenuBar";

const TipTapEditor = ({ editor }) => {
  // const editorContentRef = useRef(null);
  // useEffect(() => {
  //   console.log(editorContentRef.current.editorContentRef.current.children);
  //   editorContentRef.current.editorContentRef.current.setAttribute(
  //     "Placeholder",
  //     "jkhjl"
  //   );
  // }, {});
  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;
