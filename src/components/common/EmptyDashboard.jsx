import AddIcon from "../../assets/icons/AddIcon";
import EmptyDashboardImage from "../../assets/images/EmptyDashboardImage";

const EmptyDashboard = ({ handleShowEditor }) => {
  return (
    <div className="min-w-full h-full text-center space-y-4">
      <EmptyDashboardImage className="w-full p-10" width={400} height={400} />
      <h3>You don't have any topic</h3>
      <p className="text-gray-500">
        To create list of topics, you can click on add topic to create topic
      </p>
      <button
        onClick={handleShowEditor}
        className="mx-auto flex items-center space-x-1 px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 rounded-md"
        type="button"
      >
        <AddIcon />
        <span>Add Topic</span>
      </button>
    </div>
  );
};

export default EmptyDashboard;
