import React from "react";

const Users = () => {
  return (
    <div class="users">
      <button class="users__create-btn">Create user</button>
      <ul class="users__list">
        <li class="users__list-item">
          <span>User # 232286</span>
          <button class="users__delete-btn">+</button>
        </li>
        <li class="users__list-item">
          <span>User # 551949</span>
          <button class="users__delete-btn">+</button>
        </li>
        <li class="users__list-item">
          <span>User # 328468</span>
          <button class="users__delete-btn">+</button>
        </li>
      </ul>
    </div>
  );
};

export default Users;
