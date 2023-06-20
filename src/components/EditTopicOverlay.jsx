import { Link, useNavigate, useParams } from "react-router-dom";
import CloseIcon from "../assets/icons/CloseIcon";
import TipTapEditor from "./TipTapEditor/TipTapEditor";
import { connect } from "react-redux";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import { ADD_EDITOR_CONTENT } from "../store/Actions";
import CreatableSelect from "react-select/creatable";
import { getRandomColor, options, selectCustomStyles } from "./utils";
import { useRef, useState } from "react";
import useAutosizeTextArea from "../hooks/AutosizeTextArea";
import Image from "@tiptap/extension-image";

const EditTopicOverlay = ({ topicList, dispatch }) => {
  const { id } = useParams();
  const topic = topicList.find((item) => item.id === id);
  const [selectedTags, setSelectedTags] = useState(topic.tags);
  const [topicTitle, setTopicTitle] = useState(topic.title);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef.current, topicTitle);

  const editor = useEditor({
    extensions: [
      Image,
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
    setTopicTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (topicTitle === "") {
      setError({ message: "Topic title: can't be blank" });
      return;
    }
    if (topicTitle.length < 5) {
      setError({ message: "Topic title: can't less than 5 characters" });
      return;
    }
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
    <div className="fixed h-full top-0 bottom-0  right-0 left-0 z-50 bg-white lg:bg-gray-100 flex flex-col lg:justify-center">
      <div className="hidden lg:block lg:absolute top-1 right-1">
        <Link
          style={{ position: "absolute", top: "20px", right: "20px" }}
          to="/custom"
        >
          <CloseIcon />
        </Link>
      </div>
      <div className="bg-white h-full p-4 pt-0 space-y-4 overflow-auto border-b lg:border lg:border-gray-300 lg:rounded-lg lg:h-3/4 lg:max-w-3xl lg:w-full lg:mx-auto">
        <textarea
          value={topicTitle}
          onChange={handleTitleChange}
          ref={textAreaRef}
          rows={1}
          className="text-4xl w-full focus:outline-none p-2 resize-none mt-6"
          placeholder="New topic title here..."
        >
          {topicTitle}
        </textarea>

        <CreatableSelect
          styles={selectCustomStyles}
          value={selectedTags}
          isMulti
          options={options}
          onChange={handleSelectChange}
          placeholder={"Add upto 5 tags..."}
        />
        <TipTapEditor editor={editor} />
      </div>
      <div className="space-x-4 p-4 flex justify-end items-center lg:max-w-3xl lg:w-full lg:mx-auto lg:px-0">
        <Link to="/custom">
          <button
            type="button"
            className="bg-gray-200 py-2 px-4 rounded-md flex justify-end items-center"
          >
            Cancel
          </button>
        </Link>

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-indigo-600 py-2 px-4 text-white rounded-md hover:bg-indigo-500 transition-colors duration-300"
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

// <div className="h-full bg-gray-100 fixed w-full top-0 left-0 p-0 lg:p-10">
//   <Link
//     style={{ position: "absolute", top: "20px", right: "20px" }}
//     to="/custom"
//   >
//     <CloseIcon />
//   </Link>

//   <div className="editor-container space-y-4 mx-auto mt-0 md:mt-16 h-full">
//     <div
//       className="bg-white h-full md:h-4/5 relative p-10  border border-gray-300 rounded-lg overflow-auto"
//       style={{
//         paddingTop: error?.message ? "96px" : 0,
//       }}
//     >
//       {error?.message && (
//         <p className="absolute bg-rose-100 top-0 left-0 w-full p-4 text-rose-600 text-xs font-medium ">
//           <div className="text-rose-700 text-lg">
//             Whoops, something went wrong:
//           </div>
//           <div className="text-gray-800">{error?.message}</div>
//         </p>
//       )}
//       <div className="space-y-4">
//         <textarea
//           value={topicTitle}
//           onChange={handleTitleChange}
//           ref={textAreaRef}
//           rows={1}
//           className="text-4xl w-full focus:outline-none p-2 resize-none mt-10"
//           placeholder="New topic title here..."
//         >
//           {topicTitle}
//         </textarea>
//         <div>
//           <CreatableSelect
//             styles={selectCustomStyles}
//             value={selectedTags}
//             isMulti
//             options={options}
//             onChange={handleSelectChange}
//             placeholder={"Add upto 5 tags..."}
//           />
//         </div>

//         <TipTapEditor editor={editor} />
//       </div>
//     </div>

//     <div className="space-x-4 hidden md:flex md:justify-end">
//       <Link to="/custom">
//         <button type="button" className="bg-gray-200 py-2 px-4 rounded-md ">
//           Cancel
//         </button>
//       </Link>

//       <button
//         onClick={handleSubmit}
//         type="submit"
//         className="bg-indigo-600 py-2 px-4 text-white rounded-md hover:bg-indigo-500 transition-colors duration-300"
//       >
//         {isSubmitting && "loading"}
//         Save
//       </button>
//     </div>
//   </div>
// </div>
