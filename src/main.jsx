import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { topicReducer } from "./store/reducers/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditTopicOverlay from "./components/EditTopicOverlay.jsx";
import AllTopics from "./components/AllTopics.jsx/AllTopics.jsx";
import CustomTopics from "./components/CustomTopics/index.jsx";
import ErrorPage from "./components/common/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <CustomTopics />,
        path: "/custom",
      },
      {
        element: <EditTopicOverlay />,
        path: "custom/:id",
      },
      {
        element: <AllTopics />,
        path: "",
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
