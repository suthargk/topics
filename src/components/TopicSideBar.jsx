import { Outlet } from "react-router";

import { topicHeader } from "./utils";
import { Link } from "react-router-dom";

const TopicSideBar = ({ handleShowEditor }) => {
  return (
    <div className="w-3/4 border-l-2 p-5">
      <div className="flex justify-between">
        <ul className="flex space-x-8">
          {topicHeader.map((link) => {
            return (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <button
            onClick={handleShowEditor}
            className="py-2 px-4 text-white bg-blue-600"
            type="button"
          >
            Add Topic
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default TopicSideBar;
