import { ADD_EDITOR_CONTENT, CREATE_TOPIC, DELETE_TOPIC } from "../Actions";

const TOPIC_LIST = [];

export const topicReducer = (state = TOPIC_LIST, action) => {
  switch (action.type) {
    case CREATE_TOPIC:
      return [...state, action.payload];
    case ADD_EDITOR_CONTENT:
      return applyAddEditorContent(state, action);
    case DELETE_TOPIC:
      return applyDeleteTopic(state, action);
  }
  return state;
};

const applyAddEditorContent = (state, action) => {
  const topics = state.map((topic) => {
    return topic.id === action.payload.id
      ? { ...topic, ...action.payload }
      : topic;
  });

  return topics;
};

const applyDeleteTopic = (state, action) => {
  const topics = state.filter((topic) => action.topicId !== topic.id);
  return topics;
};
