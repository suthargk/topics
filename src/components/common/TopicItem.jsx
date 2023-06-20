import { Link, useNavigate } from "react-router-dom";
import MoreIcon from "../../assets/icons/MoreIcon";
import Tags from "../Tags";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { DELETE_TOPIC } from "../../store/Actions";
import AlertOverlay from "./AlertOverlay";
import { createPortal } from "react-dom";

const TopicItem = ({ topic, dispatch }) => {
  const [showMoreOptionLayout, setShowMoreOptionLayout] = useState(false);
  const [isAlertOverlayOpen, setIsAlertOverlayOpen] = useState(false);
  const [moreButtonPosition, setMoreButtonPosition] = useState(null);
  const moreButtonRef = useRef(null);
  const handleMoreOption = (e) => {
    e.stopPropagation();
    setMoreButtonPosition(moreButtonRef.current.getBoundingClientRect());

    setShowMoreOptionLayout(!showMoreOptionLayout);
  };

  const navigate = useNavigate();

  const handleDelete = (topicId) => {
    dispatch({
      type: DELETE_TOPIC,
      topicId,
    });
  };

  return (
    <>
      <tr
        onClick={() => {
          navigate(`/custom/${topic.id}`);
        }}
        className="bg-white cursor-pointer"
      >
        <td className="mr-2 p-2 pl-4" style={{ width: "400px" }}>
          <div
            style={{ width: "400px" }}
            className="whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {topic.title}
          </div>
        </td>
        <td className="p-2" style={{ maxWidth: "500px", minWidth: "400px" }}>
          <Tags
            style={{ maxWidth: "500px", minWidth: "400px" }}
            tags={topic.tags}
          />
        </td>
        <td className="p-2 flex justify-end relative">
          <button
            ref={moreButtonRef}
            onClick={handleMoreOption}
            className={`more-button p-1 hover:bg-gray-100 rounded-lg ${
              showMoreOptionLayout && "bg-gray-100"
            }`}
            type="button"
          >
            <MoreIcon />
          </button>
          {showMoreOptionLayout &&
            createPortal(
              <div>
                <div
                  className="fixed top-0 left-0 bottom-0 right-0 z-10"
                  onClick={handleMoreOption}
                ></div>
                <div
                  style={{
                    top: moreButtonPosition.top + 20,
                    left: moreButtonPosition.left - 200,
                  }}
                  className="absolute divide-y border shadow-xl bg-white rounded-xl z-20 w-52 cursor-pointer overflow-hidden"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAlertOverlayOpen(true);
                    }}
                    className="w-full py-3 px-3 text-left transition-all duration-300 hover:bg-gray-100"
                  >
                    Delete Topic
                  </button>
                  <Link
                    to={topic.id}
                    className="flex py-3 px-3 text-left  transition-all duration-300 hover:bg-gray-100"
                  >
                    Write Topic
                  </Link>
                </div>
              </div>,
              document.body
            )}
        </td>
      </tr>
      {isAlertOverlayOpen && (
        <AlertOverlay
          setIsAlertOverlayOpen={setIsAlertOverlayOpen}
          onHandleDelete={() => {
            handleDelete(topic.id);
          }}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(TopicItem);
