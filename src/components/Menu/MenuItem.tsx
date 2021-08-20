import React from "react";

import "./MenuItem.css";

interface MenuItemProps {
  className?: string;
  index: string | number;
  onClick?: (...args: any) => any;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  return (
    <li
      className={`menu-item p-3 cursor-pointer hover:bg-gray-100 ${props.className}`}
      data-menu-id={props.index}
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
};

export default MenuItem;
