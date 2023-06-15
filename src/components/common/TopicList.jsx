import { connect } from "react-redux";
import Tags from "../Tags";
import { Link } from "react-router-dom";

const TopicList = ({ topics }) => {
  return (
    <div>
      {topics.map((topic) => {
        return (
          <Link to={topic.id} className="flex" key={topic.title}>
            <div className="mr-auto">
              <div>{topic.title}</div>
              <Tags tags={topic.tags} />
            </div>
            <div>Button</div>
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    topics: state.topicState,
  };
};
export default connect(mapStateToProps)(TopicList);
