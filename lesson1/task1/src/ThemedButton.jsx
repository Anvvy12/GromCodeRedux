import React, { Component } from "react";
import { ThemeContext } from "./themes-context";

classNameNameName ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        classNameNameNameName="btn"
        style={{
          color: this.context.fontColor,
          backgroundColor: this.context.backround,
        }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
