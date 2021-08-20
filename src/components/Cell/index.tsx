import React from "react";

interface CellProps {
  icon?: string;
  title?: string;
  onClick?: (...args: any) => any
}

const Cell: React.FC<CellProps> = props => {
  return (
    <div className="cell bg-white flex items-center text-gray-500  px-5 border mb-2 hover:bg-gray-100 cursor-pointer" onClick={props.onClick}>
      <i className={`ri-${props.icon} mr-4`}></i>
      <div className="title flex-1 py-3">{props.title}</div>
    </div>
  );
};

export default Cell;
