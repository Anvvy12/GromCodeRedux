import React from "react";
import UserInfo from "./users/UserInfo";
import SearchField from "./users/SearchField";
import { Provider } from "react-redux";
import Spinner from "./users/Spinner";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchField />
        <Spinner />
      </div>
    </Provider>
  );
};

export default App;
