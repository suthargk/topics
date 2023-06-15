import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { topicReducer } from "./store/reducers/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TopicList from "./components/common/TopicList.jsx";
import EditTopic from "./components/EditTopic.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <TopicList />,
        path: "/custom",
      },
      {
        element: <EditTopic />,
        path: "custom/:id",
      },
    ],
  },
]);

const rootReducer = combineReducers({
  topicState: topicReducer,
});

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
