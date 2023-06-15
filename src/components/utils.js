import chroma from "chroma-js";

export const topicHeader = [
  {
    id: 1,
    name: "All",
    path: "/all",
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
  { value: "chocolate", label: "Chocolate", color: "#22c55e" },
  { value: "strawberry", label: "Strawberry", color: "#f43f5e" },
  { value: "vanilla", label: "Vanilla", color: "#8b5cf6" },
];

export const selectCustomStyles = {
  option: (styles, { data }) => {
    return {
      ...styles,
      color: data.color,
    };
  },
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "rgb(156 163 175)",
    };
  },
  control: (styles, base) => {
    return {
      ...styles,
      cursor: "pointer",
      borderColor: "rgb(229 231 235)",
      padding: 5,
      boxShadow: base.isFocused ? `0 0 0 1px rgb(99 102 241)` : 0,
      "&:hover": {
        borderColor: "rgb(209 213 219)",
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
      backgroundColor: color.alpha(0.15).css(),
      color: color.alpha(0.9).css(),
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
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
];

export const getRandomColor = () => {
  return colors[Math.trunc(Math.random() * colors.length)];
};
