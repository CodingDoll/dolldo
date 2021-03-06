import React, { useContext } from "react";
import { TodoContext } from "@store";
import { observer } from "mobx-react-lite";

import SideBar from "./SideBar";
import Content from "./Content";
import Detail from "./Detail";

const BasicLayout: React.FC = () => {
  const todoStore = useContext(TodoContext);
  return (
    <div className="flex flex-row">
      <SideBar />
      <Content />
      <Detail />
    </div>
  );
};

export default observer(BasicLayout);
