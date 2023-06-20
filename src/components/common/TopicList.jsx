import { connect } from "react-redux";
import TopicItem from "./TopicItem";

const TopicList = ({ topics }) => {
  console.log(topics);
  return (
    <div className="">
      <div className="overflow-auto border-2 border-gray-200 rounded-2xl">
        <div className="">
          <table className="min-w-full bg-gray-100">
            <thead className="">
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-2 pl-4 text-xs text-gray-600">
                  Recommended Topics
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2">
              {topics.map((topic) => {
                return <TopicItem key={topic.title} topic={topic} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    // </div>
  );
};

const mapStateToProps = (state) => {
  return {
    topics: state.topicState,
  };
};
export default connect(mapStateToProps)(TopicList);
