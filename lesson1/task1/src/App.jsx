import React, { Component } from "react";
import ThemedButton from "./ThemedButton.jsx";
import { themes, ThemeContext } from "./themes-context.js";

export default class extends Component {
  state = {
    theme: themes.dark,
  };
  toggle = () => {
    const newTheme =
      this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({
      theme: newTheme,
    });
  };
  render() {
    // return (
    //   <div>
    //     <ThemeContext.Provider value={this.state.theme}>
    //       <ThemedButton onClick={this.toggle}>Dynamic Theme</ThemedButton>
    //     </ThemeContext.Provider>
    //     <ThemeContext.Provider>
    //       <ThemedButton onClick={this.toggle}>Default Theme</ThemedButton>
    //     </ThemeContext.Provider>
    //   </div>
    // );

    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggle}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>

        <ThemedButton onClick={this.toggle}>Default Theme</ThemedButton>
      </div>
    );
  }
}
