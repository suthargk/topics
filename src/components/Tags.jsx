const Tags = ({ tags = [] }) => {
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.value}>{tag.label}</div>;
      })}
    </div>
  );
};

export default Tags;
