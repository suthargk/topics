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
    <div className="md:max-w-full max-w-7xl mx-auto p-0 md:p-12">
      <TopicSideBar handleShowEditor={handleShowEditor} />
      {showEditor && <CreateTopicOverlay setShowEditor={setShowEditor} />}
    </div>
  );
}

export default App;
