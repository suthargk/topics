import { connect } from "react-redux";
import EmptyDashboard from "../common/EmptyDashboard";
import TopicList from "../common/TopicList";
import { useOutletContext } from "react-router";

const CustomTopics = ({ topics }) => {
  const handleShowEditor = useOutletContext();

  if (topics.length === 0)
    return <EmptyDashboard handleShowEditor={handleShowEditor} />;

  return <TopicList />;
};
const mapStateToProps = (state) => {
  return {
    topics: state.topicState,
  };
};

export default connect(mapStateToProps)(CustomTopics);
