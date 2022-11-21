import React, { Component } from "react";
import { UserContext } from "./userInfo";

classNameName UserMenu extends Component {
  render() {
    return (
      <div classNameNameName="menu">
        <span classNameNameName="menu__greeting">{this.context.name}</span>
        <img
          alt="User Avatar"
          src={this.context.avatar_url}
          classNameNameName="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
