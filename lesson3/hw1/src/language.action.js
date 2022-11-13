export const SETLANGUAGE = "LANGUAGE/SET";

export const setLanguage = (language) => {
  return {
    type: SETLANGUAGE,
    payload: {
      language,
    },
  };
};
