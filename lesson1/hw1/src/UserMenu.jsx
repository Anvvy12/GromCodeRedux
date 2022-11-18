import React, { Component } from "react";
import { UserContext } from "./userInfo";

className UserMenu extends Component {
  render() {
    return (
      <div classNameName="menu">
        <span classNameName="menu__greeting">{this.context.name}</span>
        <img
          alt="User Avatar"
          src={this.context.avatar_url}
          classNameName="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
