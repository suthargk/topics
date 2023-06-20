import { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { CREATE_TOPIC } from "../store/Actions";
import CloseIcon from "../assets/icons/CloseIcon";
import { v4 as uuuid4 } from "uuid";
import { getRandomColor, options, selectCustomStyles } from "./utils";

const CreateTopicOverlay = ({ dispatch, setShowEditor }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (formValues) => {
    const payload = { ...formValues, tags: selectedTags, id: uuuid4() };
    dispatch({ type: CREATE_TOPIC, payload });
    setShowEditor(false);
  };

  const handleTagChange = (selectedOptions) => {
    const coloredSelectedOption = selectedOptions.map((option) =>
      option.color ? { ...option } : { ...option, color: getRandomColor() }
    );
    setSelectedTags(coloredSelectedOption);
  };

  return (
    <div
      onClick={() => {
        setShowEditor(false);
      }}
      className="z-50 shadow-lg fixed w-full h-full left-0 top-0 flex justify-center items-center topic-editor-overlay"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-xl w-full bg-white rounded-md"
      >
        <div
          style={{ borderBottom: "1px solid #e4e4e4" }}
          className="p-6 text-xl font-semibold flex justify-between"
        >
          <h2>New Topic</h2>

          <div className="p-2 transition-all duration-300 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-md">
            <CloseIcon
              onClick={() => {
                setShowEditor(false);
              }}
            />
          </div>
        </div>
        <div className="p-6">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">
              <div className="mb-2 font-semibold">Topic Title</div>
              <input
                className="p-2 w-full overlay-input rounded-md focus:outline-indigo-500 text-gray-600 text-base"
                placeholder="Enter title here..."
                type="text"
                id="title"
                name="title"
                {...register("title", {
                  required: "Topic title is required",
                  minLength: {
                    value: 5,
                    message: "Topic title cannot less than 5 characters",
                  },
                })}
              />
              <p className="text-rose-600 text-xs font-medium mt-1">
                {errors?.title?.message}
              </p>
            </label>

            <div className="">
              <div className="mb-2 font-semibold">Keywords</div>
              <CreatableSelect
                value={selectedTags}
                styles={selectCustomStyles}
                onChange={handleTagChange}
                isMulti
                options={options}
              />
            </div>
            <div className="flex justify-end space-x-6">
              <button
                type="button"
                className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300 "
                onClick={() => {
                  setShowEditor(false);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-600 py-2 px-4 text-white rounded-md hover:bg-indigo-500 transition-colors duration-300"
              >
                Create Topic
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
export default connect(null, mapDispatchToProps)(CreateTopicOverlay);
