import ImageIcon from "../../assets/icons/ImageIcon";

const MenuItem = ({ icon, title, action, isActive = null }) => {
  if (title === "Image")
    return (
      <label
        htmlFor="upload"
        className="cursor-pointer p-2 block rounded-md hover:bg-gray-200"
        style={{
          backgroundColor: isActive && isActive() ? "rgb(229 231 235)" : "",
        }}
      >
        <input
          className="hidden"
          id="upload"
          type="file"
          onChange={(e) => {
            const url = URL.createObjectURL(e?.target?.files[0]);
            action(url);
          }}
        />
        <ImageIcon />
      </label>
    );
  return (
    <button
      className="p-2 block rounded-md hover:bg-gray-200"
      style={{
        backgroundColor: isActive && isActive() ? "rgb(229 231 235)" : "",
      }}
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
      title={title}
    >
      <div className="flex justify-center items-end text-gray-600">
        {icon}{" "}
        <span className="text-xs -ml-1">
          {title.includes("Heading") ? title.slice(-1) : ""}&nbsp;
        </span>
      </div>
    </button>
  );
};

export default MenuItem;
