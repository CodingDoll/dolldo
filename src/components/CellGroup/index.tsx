import React from "react";

import "./CellGroup.css";

const CellGroup: React.FC = props => {
  return <div className="cell-group">{props.children}</div>;
};

export default CellGroup;
