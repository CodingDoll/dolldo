import React, { useState } from "react";
import Menu from "@components/Menu";
import Dropdown from "@components/Dropdown";
import Cell from "@components/Cell";
import dayjs, { Dayjs } from "dayjs";

type NotificationDropdownProps = {
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
};

const NotificationDropdown: React.FC<NotificationDropdownProps> = props => {
  const todayLater = dayjs().add(3, "h").minute(0);
  const tomorrow = dayjs().add(1, "d").hour(9).minute(0);
  const nextWeek = dayjs().add(7, "d").day(1).hour(9).minute(0);

  const setCaption = (value?: Dayjs | null) => {
    if (!value) {
      return "";
    }
    if (
      value.isBefore(dayjs().startOf("week")) ||
      value.isAfter(dayjs().endOf("week"))
    )
      return value.format("MMMDD日，ddd");
    else return value.format("ddd");
  };

  const actived = props.value ? true : false;
  const title = props.value
    ? `在 ${props.value.format("HH:mm")} 时提醒我`
    : "提醒我";
  let caption = setCaption(props.value);

  const clear = () => {
    props.onChange && props.onChange(null);
  };

  const handleMenuClick = (item: any, index: string | number) => {
    let value: Dayjs = dayjs();
    if (index === "1") value = todayLater;
    if (index === "2") value = tomorrow;
    if (index === "3") value = nextWeek;
    props.onChange && props.onChange(value);
  };

  const NotificationMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item className="flex items-center text-gray-500" index="1">
        <i className="ri-time-line mr-2"></i>
        <span className="flex-1">今日晚些时候</span>
        <span className="text-sm">{todayLater.format("HH:mm")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="2">
        <i className="ri-skip-forward-mini-line mr-2"></i>
        <span className="flex-1">明天</span>
        <span className="text-sm">{tomorrow.format("ddd HH:mm")}</span>
      </Menu.Item>
      <Menu.Item className="flex items-center text-gray-500" index="3">
        <i className="ri-speed-mini-line mr-2"></i>
        <span className="flex-1">下周</span>
        <span className="text-sm">{nextWeek.format("ddd HH:mm")}</span>
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
