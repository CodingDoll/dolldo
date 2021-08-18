import React from "react";
import Menu from "@components/Menu";
import Dropdown from "@components/Dropdown";
import Cell from "@components/Cell";
import dayjs from "dayjs";

const NotificationDropdown: React.FC = () => {
  const NotificationMenu = (
    <Menu>
      <Menu.Item className="flex items-center text-gray-500" index="1">
        <i className="ri-time-line mx-2"></i>
        <span className="flex-1">今日晚些时候</span>
        <span className="text-sm">{dayjs().add(3, "h").format("HH:00")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="2">
        <i className="ri-skip-forward-mini-line mx-2"></i>
        <span className="flex-1">明天</span>
        <span className="text-sm">
          {dayjs().locale("zh-cn").add(1, "d").format("ddd 9:00")}
        </span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-speed-mini-line mx-2"></i>
        <span className="flex-1">下周</span>
        <span className="text-sm">
          {dayjs().add(7, "d").day(0).format("ddd 9:00")}
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={NotificationMenu}>
      <Cell icon="alarm-line" title="提醒我" />
    </Dropdown>
  );
};

export default NotificationDropdown;
