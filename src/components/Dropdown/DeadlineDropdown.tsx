import React from "react";
import Menu from "@components/Menu";
import Dropdown from "@components/Dropdown";
import Cell from "@components/Cell";
import dayjs from "dayjs";

const DeadlineDropdown: React.FC = () => {
  const DeadlineMenu = (
    <Menu onClick={(item) => console.log(item)
    }>
      <Menu.Item className="flex items-center text-gray-500" index="1">
        <i className="ri-calendar-event-line mr-2"></i>
        <span className="flex-1">今天</span>
        <span className="text-sm">{dayjs().format("ddd")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="2">
        <i className="ri-calendar-2-line mr-2"></i>
        <span className="flex-1">明天</span>
        <span className="text-sm">
          {dayjs().locale("zh-cn").add(1, "d").format("ddd")}
        </span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-calendar-todo-line mr-2"></i>
        <span className="flex-1">下周</span>
        <span className="text-sm">
          {dayjs().add(7, "d").day(1).format("ddd")}
        </span>
      </Menu.Item>
    </Menu >
  );

  return (
    <Dropdown overlay={DeadlineMenu}>
      <Cell icon="calendar-todo-line" title="添加截止日期" />
    </Dropdown>
  );
};

export default DeadlineDropdown;
