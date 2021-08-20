import React, { useState } from "react";
import Menu from "@components/Menu";
import Dropdown from "@components/Dropdown";
import Cell from "@components/Cell";
import dayjs from "dayjs";

const NotificationDropdown: React.FC = () => {
  const todayLater = dayjs().add(3, "h");
  const tomorrow = dayjs().add(1, "d");
  const nextWeek = dayjs().add(7, "d").day(1);

  const [actived, setActived] = useState(false);
  const [title, setTitle] = useState("提醒我");
  const [caption, setCaption] = useState<string>();

  const clear = () => {
    setActived(false);
    setTitle("提醒我");
    setCaption(undefined);
  };

  const handleMenuClick = (item: any, index: string | number) => {
    setActived(true);
    switch (index) {
      case "1":
        setTitle(`在 ${todayLater.format("HH:00")} 时提醒我`);
        setCaption(todayLater.format("ddd"));
        break;
      case "2":
        setTitle(`在 ${tomorrow.format("9:00")} 时提醒我`);
        setCaption(tomorrow.format("ddd"));
        break;
      case "3":
        setTitle(`在 ${nextWeek.format("9:00")} 时提醒我`);
        setCaption(nextWeek.format("MMMDD日，ddd"));
        break;
    }
  };

  const NotificationMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item className="flex items-center text-gray-500" index="1">
        <i className="ri-time-line mr-2"></i>
        <span className="flex-1">今日晚些时候</span>
        <span className="text-sm">{todayLater.format("HH:00")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="2">
        <i className="ri-skip-forward-mini-line mr-2"></i>
        <span className="flex-1">明天</span>
        <span className="text-sm">{tomorrow.format("ddd 9:00")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-speed-mini-line mr-2"></i>
        <span className="flex-1">下周</span>
        <span className="text-sm">{nextWeek.format("ddd 9:00")}</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={NotificationMenu}>
      <Cell
        icon="alarm-line"
        title={title}
        caption={caption}
        actived={actived}
        onClear={clear}
      />
    </Dropdown>
  );
};

export default NotificationDropdown;
