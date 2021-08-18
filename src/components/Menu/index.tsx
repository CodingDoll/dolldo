import React, { MouseEventHandler } from "react";
import MenuItem from "./MenuItem";

interface MenuComponent<T = {}> extends React.FC<T> {
  Item: typeof MenuItem;
}

interface MenuProps {
  onClick?: (item: HTMLElement, index: string | number) => any;
}

const Menu: MenuComponent<MenuProps> = props => {
  const handleClick: MouseEventHandler = e => {
    if (props.onClick)
      props.onClick(
        e.target as HTMLElement,
        (e.target as HTMLElement).dataset.menuId!
      );
  };

  return <ul className="bg-white" onClick={handleClick}>{props.children}</ul>;
};

Menu.Item = MenuItem;

export default Menu;
