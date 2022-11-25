import React, { useState } from "react";
import { connect } from "react-redux";
import * as userActions from "./user.actions";

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState("");

  const onChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserSearch = () => {
    fetchUserData(userName);
  };
  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={userName}
        onChange={() => onChange(event)}
      />
      <button className="name-form__btn btn" onClick={handleUserSearch}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData: userActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
