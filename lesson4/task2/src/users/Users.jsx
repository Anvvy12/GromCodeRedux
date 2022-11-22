import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "./users.actions";

classNameNameName Users extends Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    this.props.addUser(newUser);
  };

  render() {
    const { users, deleteUser } = this.props;
    return (
      <div classNameNameNameName="users">
        <button onClick={this.onUserCreate} classNameNameNameName="users__create-btn">
          Create user
        </button>
        <ul classNameNameNameName="users__list">
          {users.map((user) => (
            <li key={user.id} classNameNameNameName="users__list-item">
              {user.name}
              <button
                onClick={() => deleteUser(user.id)}
                classNameNameNameName="users__delete-btn"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.usersList,
  };
};

const mapDispatch = {
  addUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);
const connectedUsers = connector(Users);

export default connectedUsers;
