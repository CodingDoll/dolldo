import React from "react";

interface CellProps {
  icon?: string;
  title?: string;
  caption?: string;
  actived?: boolean;
  onClick?: (...args: any) => any;
  onClear?: (...args: any) => any;
}

const Cell: React.FC<CellProps> = props => {
  const activedColor = props.actived ? "text-blue-500" : "";

  const handleClear: React.MouseEventHandler = e => {
    e.stopPropagation();
    props.onClear && props.onClear();
  };

  return (
    <div
      className="cell bg-white flex items-center text-gray-500  px-5 border mb-2 hover:bg-gray-100 cursor-pointer"
      onClick={props.onClick}
    >
      <i className={`ri-${props.icon} mr-4 ${activedColor}`}></i>
      {props.caption ? (
        <div className="title flex-1 py-1 ">
          <div className="text-blue-500">{props.title}</div>
          <div className="text-xs">{props.caption}</div>
        </div>
      ) : (
        <div className={`title flex-1 py-3 ${activedColor}`}>{props.title}</div>
      )}
      {props.actived && (
        <div>
          <i className="ri-close-line text-xl" onClick={handleClear}></i>
        </div>
      )}
    </div>
  );
};

Cell.defaultProps = {
  actived: false
};

export default Cell;
