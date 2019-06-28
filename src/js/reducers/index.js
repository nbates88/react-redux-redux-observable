import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_LOADED,
  TIME_LOADED
} from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  timestamp: {},
  error: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      error: "Bad word was used."
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  if (action.type === TIME_LOADED) {
    return { ...state, timestamp: action.payload };
  }

  return state;
}

export default rootReducer;
