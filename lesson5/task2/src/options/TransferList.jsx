import React from "react";
import Options from "./Options";

const TransferList = () => {
  return (
    <div className="transfer-list">
      <Options title={"Available options"} />
      <Options title={"Selected options"} />
    </div>
  );
};

export default TransferList;
