import React from "react";

export const themes = {
  dark: {
    fontColor: "#ffffff",
    backround: "#222222",
  },
  light: {
    fontColor: "#000000",
    backround: "#eeeeee",
  },
};

export const ThemeContext = React.createContext(themes.dark);
