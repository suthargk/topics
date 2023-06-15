import { useState } from "react";
import "./App.css";
import TopicSideBar from "./components/TopicSideBar";
import CreateTopicOverlay from "./components/CreateTopicOverlay";

function App() {
  const [showEditor, setShowEditor] = useState(false);

  const handleShowEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <div className="w-3/4 mx-auto flex justify-center items-center shadow-md p-10 text-gray-700">
      <div className="text-xl w-1/4">
        <a href="#">Categories</a>
      </div>
      <TopicSideBar handleShowEditor={handleShowEditor} />

      {showEditor && <CreateTopicOverlay setShowEditor={setShowEditor} />}
    </div>
  );
}

export default App;
