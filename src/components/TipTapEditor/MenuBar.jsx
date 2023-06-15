import React from "react";
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
      icon: <UnorderedListIcon />,
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: <OrderedListIcon />,
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },

    {
      icon: <CodeBlockIcon />,
      title: "Code Block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
  ];

  return (
    <div className="flex space-x-1">
      {items.map((item, index) => (
        <div key={index}>
          <MenuItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
