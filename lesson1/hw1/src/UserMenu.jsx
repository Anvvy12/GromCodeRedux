import React, { Component } from "react";
import { UserContext } from "./userInfo";

classNameNameNameName UserMenu extends Component {
  render() {
    return (
      <div classNameNameNameNameName="menu">
        <span classNameNameNameNameName="menu__greeting">{this.context.name}</span>
        <img
          alt="User Avatar"
          src={this.context.avatar_url}
          classNameNameNameNameName="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
