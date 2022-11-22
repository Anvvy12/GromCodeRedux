import React from "react";
import { Provider } from "react-redux";
const App = () => {
  return (
    <div>
      <div class="filter">
        <span class="filter__count"></span>
        <input type="text" class="filter__input" value="" />
      </div>
      <ul class="users">
        <li class="user">
          <span class="user__name">Tad</span>
          <span class="user__age">18</span>
        </li>

        <li class="user">
          <span class="user__name">Anna</span>
          <span class="user__age">45</span>
        </li>
      </ul>
    </div>
  );
};

export default App;
