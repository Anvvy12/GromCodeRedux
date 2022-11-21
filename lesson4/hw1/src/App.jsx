import React from "react";
import UsersList from "./users/UsersList";
import { Provider } from "react-redux";
import store from "./store";

export default () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};
