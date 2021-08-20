import React from "react";
import Menu from "@components/Menu";
import Dropdown from "@components/Dropdown";
import Cell from "@components/Cell";

const RepeatDropdown: React.FC = () => {
  const RepeatMenu = (
    <Menu onClick={item => console.log(item)}>
      <Menu.Item className="flex items-center text-gray-500" index="1">
        <i className="ri-calendar-event-line mr-2"></i>
        <span className="flex-1">每天</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="2">
        <i className="ri-calendar-2-line mr-2"></i>
        <span className="flex-1">工作日</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-calendar-todo-line mr-2"></i>
        <span className="flex-1">每周</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-calendar-todo-line mr-2"></i>
        <span className="flex-1">每月</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-calendar-todo-line mr-2"></i>
        <span className="flex-1">每年</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={RepeatMenu}>
      <Cell icon="repeat-2-line" title="重复" />
    </Dropdown>
  );
};

export default RepeatDropdown;
