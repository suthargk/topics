const MenuItem = ({ icon, title, action, isActive = null }) => {
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
