import React, { useState } from "react";

enum CheckStatus {
  Unchecked,
  Hover,
  Cheked
}

interface CheckBtnProps {
  checked: boolean;
}

const CheckBtn: React.FC<CheckBtnProps> = props => {
  const [checkStatus, setCheckStatus] = useState<CheckStatus>(
    CheckStatus.Unchecked
  );
  props.checked && setCheckStatus(CheckStatus.Cheked);

  return (
    <span
      className="text-white text-opacity-70 text-2xl"
      onMouseOver={() => setCheckStatus(CheckStatus.Hover)}
      onMouseLeave={() => setCheckStatus(CheckStatus.Unchecked)}
    >
      <i
        className={
          props.checked
            ? "ri-checkbox-cirle-fill"
            : checkStatus === CheckStatus.Unchecked
            ? "ri-checkbox-blank-circle-line"
            : "ri-checkbox-circle-line"
        }
      ></i>
    </span>
  );
};

export default CheckBtn;
