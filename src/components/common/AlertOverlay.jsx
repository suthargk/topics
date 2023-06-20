import CloseIcon from "../../assets/icons/CloseIcon";

const AlertOverlay = ({ setIsAlertOverlayOpen, onHandleDelete = () => {} }) => {
  return (
    <div
      onClick={() => {
        setIsAlertOverlayOpen(false);
      }}
      className="fixed alert-overlay z-50 top-0 left-0 h-full w-full flex justify-center items-center"
    >
      <div className="w-80 relative bg-white px-5 pb-5 pt-10 rounded-xl">
        <div className="absolute text-gray-600 top-4 right-4 cursor-pointer hover:bg-gray-100 p-1 rounded-md">
          <CloseIcon />
        </div>
        <h4 className="font-semibold mb-2">Delete Topic</h4>
        <div className="text-gray-500">Are you sure you want to delete?</div>
        <div className="space-x-4 flex justify-end mt-8">
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onHandleDelete}
            type="button"
            className="bg-red-500 hover:bg-red-400 transition-colors duration-300 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertOverlay;
