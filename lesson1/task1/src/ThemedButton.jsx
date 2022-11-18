import React, { Component } from "react";
import { ThemeContext } from "./themes-context";

className ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        classNameName="btn"
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
