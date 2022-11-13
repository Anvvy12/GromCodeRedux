import React from "react";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider>
      <Users />
    </Provider>
  );
};

export default App;
