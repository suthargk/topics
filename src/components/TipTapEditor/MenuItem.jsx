const MenuItem = ({ icon, title, action, isActive = null }) => {
  return (
    <button
      className="p-1 border"
      style={{ backgroundColor: isActive && isActive() ? "red" : "" }}
      //isActive && isActive()
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
      title={title}
    >
      <div className="flex justify-center items-end">
        {icon}{" "}
        <span className="text-sm -ml-1">
          {title.includes("Heading") ? title.slice(-1) : ""}&nbsp;
        </span>
      </div>
    </button>
  );
};

export default MenuItem;
