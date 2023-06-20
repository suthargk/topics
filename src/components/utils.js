import chroma from "chroma-js";

export const topicHeader = [
  {
    id: 1,
    name: "All",
    path: "",
  },
  {
    id: 2,
    name: "Custom",
    path: "/custom",
  },
  {
    id: 3,
    name: "ICP",
    path: "/icp",
  },
  {
    id: 4,
    name: "Mission",
    path: "/mission",
  },
  {
    id: 5,
    name: "Product",
    path: "/product",
  },
];

export const options = [
  { value: "chocolate", label: "Chocolate", color: "#16a34a" },
  { value: "strawberry", label: "Strawberry", color: "#db2777" },
  { value: "vanilla", label: "Vanilla", color: "#7c3aed" },
];

export const selectCustomStyles = {
  option: (styles, { data }) => {
    return {
      ...styles,
      color: data.color,
    };
  },

  container: (styles) => {
    return {
      ...styles,
      zIndex: 20,
    };
  },
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "rgb(156 163 175)",
      fontSize: "15px",
    };
  },
  control: (styles, base) => {
    return {
      ...styles,
      cursor: "pointer",
      borderColor: "rgb(229 231 235)",
      padding: "2px",
      boxShadow: base.isFocused ? `0 0 0 1px rgb(99 102 241)` : 0,
      border: base.isFocused && "1px solid rgb(99 102 241)",

      "&:hover": {
        borderColor: "rgb(209 213 219)",
        border: base.isFocused && "1px solid rgb(99 102 241)",
      },
    };
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      color: data.color,
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
      color: color.alpha(1).css(),
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      padding: "0 5px",
    };
  },
  multiValueRemove: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      borderRadius: "100px",
      width: "20px",
      height: "20px",
      color: data.color,
      "&:hover": {
        color: data.color,
        backgroundColor: color.alpha(0.1).css(),
      },
    };
  },
};

export const colors = [
  "#dc2626",
  "#ea580c",
  "#d97706",
  "#ca8a04",
  "#65a30d",
  "#16a34a",
  "#059669",
  "#0d9488",
  "#0891b2",
  "#0284c7",
  "#2563eb",
  "#4f46e5",
  "#7c3aed",
  "#9333ea",
  "#c026d3",
  "#db2777",
  "#e11d48",
];

export const getRandomColor = () => {
  return colors[Math.trunc(Math.random() * colors.length)];
};
