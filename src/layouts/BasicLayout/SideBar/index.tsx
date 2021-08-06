import React from "react";

import ListItem from "./ListItem";
import CreateBtn from "./CreateBtn";
import { TodoContext } from "@store";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const SideBar: React.FC = () => {
  const todoStore = useContext(TodoContext);

  return (
    <div className="w-80 min-h-screen bg-gray-800">
      <div className="text-white p-3 font-thin text-opacity-60 text-sm">
        Dolldo
      </div>
      <ListItem icon="sun-line" title="我的一天"></ListItem>
      <ListItem icon="home-5-line" title="任务"></ListItem>
      <hr className="border-opacity-25 mx-6 my-2" />
      {todoStore.lists.map(i => (
        <ListItem title={i.title} key={i.id}></ListItem>
      ))}
      <ListItem icon="home-5-line" title="任务" status={1}></ListItem>
      <CreateBtn></CreateBtn>
    </div>
  );
};

export default observer(SideBar);
