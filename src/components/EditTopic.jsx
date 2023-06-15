import { Link, useParams } from "react-router-dom";
import CloseIcon from "../assets/icons/CloseIcon";
import TipTapEditor from "./TipTapEditor/TipTapEditor";
import { connect } from "react-redux";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import { ADD_EDITOR_CONTENT } from "../store/Actions";

const EditTopic = ({ topicList, dispatch }) => {
  const { id } = useParams();
  const topic = topicList.find((item) => item.id === id);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: topic.content,
  });

  const handleSubmit = () => {
    dispatch({
      type: ADD_EDITOR_CONTENT,
      payload: {
        id,
        title: topic.title,
        content: editor.getJSON(),
      },
    });
  };

  return (
    <div className="h-screen bg-gray-100 fixed w-full top-0 left-0 p-10">
      <Link
        style={{ position: "absolute", top: "10px", right: "10px" }}
        to="/custom"
      >
        <CloseIcon />
      </Link>

      <form>
        <div className="w-1/2 space-y-4 mx-auto rounded-lg">
          <div className="bg-white p-10 space-y-4">
            <div
              contentEditable="true"
              className="text-4xl w-full focus:outline-none"
              placeholder="New topic title here"
            >
              {topic?.title}
            </div>
            <div>
              <TipTapEditor editor={editor} />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="type"
            className="bg-indigo-600 py-2 px-4 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    topicList: state.topicState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTopic);
