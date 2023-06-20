import { Outlet } from "react-router";
import AddIcon from "../assets/icons/AddIcon";
import { topicHeader } from "./utils";
import { Link } from "react-router-dom";

const TopicSideBar = ({ handleShowEditor }) => {
  return (
    <div className="p-5 ">
      <div className="flex justify-between">
        <ul className="flex space-x-8">
          {topicHeader.map((link) => {
            return (
              <li key={link.path}>
                <Link
                  className="text-gray-600 category-link font-medium px-3 pb-6"
                  to={link.path}
                >
                  {link.name}
                </Link>
                <div className="category-link-border rounded-t-md"></div>
              </li>
            );
          })}
        </ul>
        <div className="-mt-1">
          <button
            onClick={handleShowEditor}
            className="flex items-center space-x-1 px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 rounded-md"
            type="button"
          >
            <AddIcon />
            <span>Add Topic</span>
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200 mb-4"></div>
      <Outlet context={handleShowEditor} />
    </div>
  );
};

export default TopicSideBar;
