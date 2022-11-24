import React, { Component } from "react";
import UserInfo from "./users/UserInfo";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <UserInfo />
    </Provider>
  );
};

export default App;
