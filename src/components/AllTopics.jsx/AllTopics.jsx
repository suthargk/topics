import { connect } from "react-redux";
import TopicList from "../common/TopicList";
import AddIcon from "../../assets/icons/AddIcon";
import { useOutletContext } from "react-router";
import EmptyDashboard from "../common/EmptyDashboard";

const AllTopics = ({ topics }) => {
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

export default connect(mapStateToProps)(AllTopics);
