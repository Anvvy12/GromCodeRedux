import React from "react";
import ConectedUserList from "./users/UsersList";
import { Provider } from "react-redux";
import store from "./store";

export default () => {
  return (
    <Provider store={store}>
      <ConectedUserList />
    </Provider>
  );
};
