import MenuItem from "./MenuItem";
import BoldIcon from "../../assets/icons/BoldIcon";
import ItalicIcon from "../../assets/icons/ItalicIcon";
import StrikeIcon from "../../assets/icons/StrikeIcon";
import TextIcon from "../../assets/icons/TextIcon";
import HeadingIcon from "../../assets/icons/HeadingIcon";
import UnorderedListIcon from "../../assets/icons/UnorderedListIcon";
import OrderedListIcon from "../../assets/icons/OrderedListIcon";
import CodeIcon from "../../assets/icons/CodeIcon";
import CodeBlockIcon from "../../assets/icons/CodeBlockIcon";
import ImageIcon from "../../assets/icons/ImageIcon";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const items = [
    {
      icon: <BoldIcon />,
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: <ItalicIcon />,
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: <StrikeIcon />,
      title: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: <CodeIcon />,
      title: "Code",
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
    {
      icon: <HeadingIcon />,
      title: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <HeadingIcon />,
      title: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <TextIcon />,
      title: "Paragraph",
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive("paragraph"),
    },
    {
      icon: <CodeBlockIcon />,
      title: "Code Block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      icon: <ImageIcon />,
      title: "Image",
      action: (url) => editor.chain().focus().setImage({ src: url }).run(),
    },
  ];

  return (
    <div className="flex space-x-2 justify-center items-center bg-gray-100 -mx-4 p-1 flex-wrap sticky top-0 left-0 z-10">
      {items.map((item, index) => (
        <div key={index}>
          <MenuItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
