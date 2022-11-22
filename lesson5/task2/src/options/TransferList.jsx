import React from "react";
import AvailableOption from "./AvailableOption";
import SelectedOption from "./SelectedOption";

const TransferList = () => {
  return (
    <div classNameName="transfer-list">
      <AvailableOption title={"Available options"} />
      <SelectedOption title={"Selected options"} />
    </div>
  );
};

export default TransferList;
