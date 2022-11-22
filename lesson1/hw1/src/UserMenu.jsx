import React, { Component } from "react";
import { UserContext } from "./userInfo";

classNameNameName UserMenu extends Component {
  render() {
    return (
      <div classNameNameNameName="menu">
        <span classNameNameNameName="menu__greeting">{this.context.name}</span>
        <img
          alt="User Avatar"
          src={this.context.avatar_url}
          classNameNameNameName="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
