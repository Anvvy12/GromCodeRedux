import React, { Component } from "react";
import { UserContext } from "./userInfo";

class UserMenu extends Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{this.context.name}</span>
        <img
          alt="User Avatar"
          src={this.context.avatar_url}
          className="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
