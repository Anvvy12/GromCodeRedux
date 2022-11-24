import React from "react";

const UserInfo = () => {
  return (
    <div class="user">
      <img
        alt="User Avatar"
        src="https://avatars0.githubusercontent.com/u/10639145?v=4"
        class="user__avatar"
      />
      <div class="user__info">
        <span class="user__name">Apple</span>
        <span class="user__location">Cupertino, CA</span>
      </div>
    </div>
  );
};

export default UserInfo;
