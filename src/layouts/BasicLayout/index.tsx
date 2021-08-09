import React from "react";

import SideBar from "./SideBar";
import Content from "./Content";

export default function BasicLayout() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Content icon="list-unordered" title="Laby" />
    </div>
  );
}
