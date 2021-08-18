import React, {
  HTMLAttributes,
  ReactChild,
  ReactElement,
  ReactInstance,
  ReactNode,
  useRef
} from "react";
import { findDOMNode } from "react-dom";
import NotificationDropdown from "./NotificationDropdown";

interface DropdownComponent<T = {}> extends React.FC<T> {
  Notification: typeof NotificationDropdown;
}

interface DropdownProps {
  overlay?: ReactNode;
}

const Dropdown: DropdownComponent<DropdownProps> = props => {
  const onClick = () => {
    console.log(123);
  };

  const child = React.Children.only(props.children) as ReactElement;
  const newChildProps: HTMLAttributes<HTMLElement> = {};
  const childProps = child.props;
  newChildProps.onClick = onClick;
  const trigger = React.cloneElement(child, newChildProps);
  console.log(trigger);
  // const childRef = useRef(null);
  // findDOMNode(child as ReactInstance);
  return (
    <>
      {trigger}
      {/* {child} */}
      <div className="overlay">{props.overlay}</div>
    </>
  );
};

Dropdown.Notification = NotificationDropdown;

export default Dropdown;
