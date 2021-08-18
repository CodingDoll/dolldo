import React from "react";

interface MenuItemProps {
  className?: string;
  index: string | number;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  return (
    <li
      className={`p-3 hover:bg-gray-100 ${props.className}`}
      data-menu-id={props.index}
    >
      {props.children}
    </li>
  );
};

export default MenuItem;
