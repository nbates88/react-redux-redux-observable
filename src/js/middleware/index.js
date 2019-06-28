import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
import { addError } from "../actions/index";
const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return next => {
    return action => {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch(addError({ type: FOUND_BAD_WORD }));
        }
      }
      return next(action);
    };
  };
};
