import { SETLANGUAGE } from "./language.actions";

const language = "eu";

const languageReducer = (state = language, action) => {
  switch (action.type) {
    case SETLANGUAGE:
      return action.payload.language;

    default:
      return state;
  }
};

export default languageReducer;
