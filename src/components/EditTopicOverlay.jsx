import { Link, useNavigate, useParams } from "react-router-dom";
import CloseIcon from "../assets/icons/CloseIcon";
import TipTapEditor from "./TipTapEditor/TipTapEditor";
import { connect } from "react-redux";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import { ADD_EDITOR_CONTENT } from "../store/Actions";
import CreatableSelect from "react-select/creatable";
import { getRandomColor, options, selectCustomStyles } from "./utils";
import { useState } from "react";

const EditTopicOverlay = ({ topicList, dispatch }) => {
  const { id } = useParams();
  const topic = topicList.find((item) => item.id === id);
  const [selectedTags, setSelectedTags] = useState(topic.tags);
  const [topicTitle, setTopicTitle] = useState(topic.title);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleTitleChange = (e) => {
    window.getSelection().selectAllChildren(e.target);
    window.getSelection().collapseToEnd();
    setTopicTitle(e.target.textContent);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    dispatch({
      type: ADD_EDITOR_CONTENT,
      payload: {
        id,
        title: topicTitle,
        tags: selectedTags,
        content: editor.getJSON(),
      },
    });

    navigate("/custom");
  };

  const handleSelectChange = (selectedOptions) => {
    if (selectedOptions.length > 5) return;
    const coloredSelectedOption = selectedOptions.map((option) =>
      option.color ? { ...option } : { ...option, color: getRandomColor() }
    );
    setSelectedTags(coloredSelectedOption);
  };

  return (
    <div className="h-full bg-gray-100 fixed w-full top-0 left-0 p-10 ">
      <Link
        style={{ position: "absolute", top: "20px", right: "20px" }}
        to="/custom"
      >
        <CloseIcon />
      </Link>

      <div className="editor-container space-y-4 mx-auto mt-16">
        <div className="bg-white p-10 space-y-4 border border-gray-300 rounded-lg">
          <div
            value={topicTitle}
            contentEditable={true}
            onInput={handleTitleChange}
            className="text-4xl w-full focus:outline-none p-2"
            placeholder="New topic title here..."
          >
            {topicTitle}
          </div>
          <div>
            <CreatableSelect
              styles={selectCustomStyles}
              value={selectedTags}
              isMulti
              options={options}
              onChange={handleSelectChange}
              placeholder={"Add upto 5 tags..."}
            />
          </div>

          <TipTapEditor editor={editor} />
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="bg-indigo-600 py-2 px-4 text-white rounded-md"
        >
          {isSubmitting && "loading"}
          Save
        </button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTopicOverlay);
