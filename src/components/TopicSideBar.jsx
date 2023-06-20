import { Outlet, useLocation } from "react-router";
import AddIcon from "../assets/icons/AddIcon";
import { topicHeader } from "./utils";
import { NavLink } from "react-router-dom";

const TopicSideBar = ({ handleShowEditor }) => {
  const location = useLocation();

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <ul className="flex space-x-2">
          {topicHeader.map((link) => {
            return (
              <li key={link.path}>
                <NavLink
                  className="text-gray-600 category-link font-medium px-2 pb-6"
                  to={link.path}
                >
                  {link.name}
                </NavLink>

                <div
                  className={`category-link-border rounded-t-md ${
                    location.pathname === link.path && "bg-indigo-600"
                  }`}
                ></div>
              </li>
            );
          })}
        </ul>
        <div className="-mt-1 md:relative absolute bottom-5 lg:bottom-0 right-5 lg:right-0">
          <button
            onClick={handleShowEditor}
            className="flex items-center md:space-x-1 md:px-3 md:py-2 p-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 md:rounded-md"
            type="button"
          >
            <AddIcon />
            <span className="hidden md:block">Add Topic</span>
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200 mb-4"></div>
      <Outlet context={handleShowEditor} />
    </div>
  );
};

export default TopicSideBar;
