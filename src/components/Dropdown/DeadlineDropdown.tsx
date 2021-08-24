import React from "react";
import Menu from "@components/Menu";
import Dropdown from "@components/Dropdown";
import Cell from "@components/Cell";
import dayjs, { Dayjs } from "dayjs";

type DeadlineDropdownProps = {
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
};

const DeadlineDropdown: React.FC<DeadlineDropdownProps> = props => {
  const today = dayjs().endOf("day");
  const tomorrow = dayjs().add(1, "d").endOf("day");
  const nextWeek = dayjs().add(7, "d").startOf("week").endOf("day");

  const clear = () => {
    props.onChange && props.onChange(null);
  };

  const handleMenuClick = (item: any, index: string | number) => {
    let value: Dayjs = dayjs();
    if (index === "1") value = today;
    if (index === "2") value = tomorrow;
    if (index === "3") value = nextWeek;
    props.onChange && props.onChange(value);
  };

  const DeadlineMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item className="flex items-center text-gray-500" index="1">
        <i className="ri-calendar-event-line mr-2"></i>
        <span className="flex-1">今天</span>
        <span className="text-sm">{today.format("ddd")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="2">
        <i className="ri-calendar-2-line mr-2"></i>
        <span className="flex-1">明天</span>
        <span className="text-sm">{tomorrow.format("ddd")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-calendar-todo-line mr-2"></i>
        <span className="flex-1">下周</span>
        <span className="text-sm">{nextWeek.format("ddd")}</span>
      </Menu.Item>
    </Menu>
  );

  const setTitle = (value?: Dayjs | null) => {
    // default
    if (!value) return "添加截止日期";

    // 使用 diff 比较天
    const dayDiff = dayjs().endOf("day").diff(value, "day");
    if (dayDiff === 0) return "今天 到期";
    if (dayDiff === 1) return "昨天 到期";
    if (dayDiff === -1) return "明天 到期";
    else return value.format("MMMDD日，ddd") + " 到期";
  };

  const actived = props.value ? true : false;
  const title = setTitle(props.value);

  return (
    <Dropdown overlay={DeadlineMenu}>
      <Cell
        icon="calendar-todo-line"
        title={title}
        actived={actived}
        onClear={clear}
      />
    </Dropdown>
  );
};

export default DeadlineDropdown;
