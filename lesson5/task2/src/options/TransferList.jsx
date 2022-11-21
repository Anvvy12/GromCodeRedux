import React from "react";

const TransferList = () => {
  return (
    <div className="transfer-list">
      <div className="options">
        <div className="options__title">Selected options</div>
        <ul className="options__list">
          <li>
            <button className="options__list-item">
              Leather-trimmed Sport Seats
            </button>
          </li>
          <li>
            <button className="options__list-item">
              Daytime running lights
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TransferList;
