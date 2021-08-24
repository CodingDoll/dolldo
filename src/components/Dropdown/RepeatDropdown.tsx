import React from "react";
import Menu from "@components/Menu";
import Dropdown from "@components/Dropdown";
import Cell from "@components/Cell";
import { RepeatOptions } from "@store";

const zhCNRepeatOptions: Record<any, string> = {
  [RepeatOptions.EveryDay]: "每天",
  [RepeatOptions.EveryWeekDay]: "工作日",
  [RepeatOptions.EveryWeek]: "每周",
  [RepeatOptions.EveryMonth]: "每月",
  [RepeatOptions.EveryYear]: "每年"
};

type RepeatDropdownProps = {
  value?: RepeatOptions | null;
  onChange?: (value: RepeatOptions | null) => void;
};

const RepeatDropdown: React.FC<RepeatDropdownProps> = props => {
  const menuClick = (item: any, index: string | number | null) => {
    props.onChange && props.onChange(index as RepeatOptions);
  };

  const clear = () => {
    props.onChange && props.onChange(null);
  };

  const RepeatMenu = (
    <Menu onClick={menuClick}>
      {Object.keys(zhCNRepeatOptions).map(key => (
        <Menu.Item
          className="flex items-center text-gray-500"
          key={key}
          index={key}
        >
          <i className="ri-calendar-event-line mr-2"></i>
          <span className="flex-1">{zhCNRepeatOptions[key]}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  const actived = props.value ? true : false;
  const title = props.value ? zhCNRepeatOptions[props.value] : "重复";

  return (
    <Dropdown overlay={RepeatMenu}>
      <Cell
        icon="repeat-2-line"
        actived={actived}
        title={title}
        onClear={clear}
      />
    </Dropdown>
  );
};

export default RepeatDropdown;
