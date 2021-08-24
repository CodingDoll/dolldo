import React, {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useState
} from "react";
import { createPortal } from "react-dom";
import NotificationDropdown from "./NotificationDropdown";
import DeadlineDropdown from "./DeadlineDropdown";
import RepeatDropdown from "./RepeatDropdown";

import "animate.css";

interface DropdownComponent<T = {}> extends React.FC<T> {
  Notification: typeof NotificationDropdown;
  Deadline: typeof DeadlineDropdown;
  Repeat: typeof RepeatDropdown;
}

interface DropdownProps {
  overlay?: ReactNode;
}

interface PopupProps {
  visible: boolean;
}

const Mask: React.FC = () => {
  const bodyEl = document.getElementsByTagName("body");

  return createPortal(
    <div className="absolute inset-0 opacity-0"></div>,
    bodyEl[0]
  );
};

const Popup: React.FC<PopupProps> = props => {
  const onClick: React.MouseEventHandler = e => {
    e.stopPropagation();
  };
  if (props.visible)
    return (
      <>
        <Mask />
        <div
          className={
            "absolute m-2 z-50 w-60 left-0 p-2 shadow bg-white rounded "
          }
        >
          {props.children}
        </div>
      </>
    );
  else return <></>;
};

const Dropdown: DropdownComponent<DropdownProps> = props => {
  const [popupVisible, setPopupVisible] = useState( false);
  const onClick: React.MouseEventHandler = e => {
    setPopupVisible(prevState => !prevState);
    e.stopPropagation();
  };

  const child = React.Children.only(props.children) as ReactElement;
  const newChildProps: HTMLAttributes<HTMLElement> = {};
  newChildProps.onClick = onClick;
  const trigger = React.cloneElement(child, newChildProps);

  const hidePopup = () => setPopupVisible(false);

  useEffect(() => {
    window.addEventListener("click", hidePopup);
    return () => {
      window.removeEventListener("click", hidePopup);
    };
  }, []);

  return (
    <div className="relative">
      {trigger}
      <Popup visible={popupVisible}>{props.overlay}</Popup>
    </div>
  );
};

Dropdown.Notification = NotificationDropdown;
Dropdown.Deadline = DeadlineDropdown;
Dropdown.Repeat = RepeatDropdown;

export default Dropdown;
