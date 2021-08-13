import React from "react";

import styles from "./CheckBtn.module.css";

interface CheckBtnProps {
  checked: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const CheckBtn: React.FC<CheckBtnProps> = props => {
  const actualClass =
    styles["check-btn"] +
    " " +
    props.className +
    (props.checked
      ? " ri-checkbox-circle-fill"
      : " ri-checkbox-blank-circle-line");

  const handleClick = () => {
    if (props.onChange) props.onChange(!props.checked);
  };

  return <i className={actualClass} onClick={handleClick}></i>;
};

CheckBtn.defaultProps = {
  className: "text-white text-opacity-70 text-2xl"
};

export default CheckBtn;
