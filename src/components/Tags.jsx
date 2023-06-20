import chroma from "chroma-js";

const Tags = ({ tags = [], style }) => {
  const remainingTags = tags.length > 4 ? tags.slice(0, 3) : tags;
  return (
    <div className="flex" style={style}>
      <div className="flex gap-2">
        {remainingTags.map((tag) => {
          const tagColor = chroma(tag.color);
          return (
            <div
              className="px-3 self-center text-sm rounded-2xl flex items-center "
              style={{
                backgroundColor: tagColor.alpha(0.1).css(),
                color: tagColor.alpha(1).css(),
              }}
              key={tag.value}
            >
              {tag.label}
            </div>
          );
        })}
      </div>

      {tags.length - remainingTags.length ? (
        <div className="text-xs  w-6 h-6 flex justify-center items-center">
          +{tags.length - remainingTags.length}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tags;
