import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";

import ListItem, { ListItemType } from "./MenuItem";
import CreateBtn from "./CreateBtn";
import { TodoContext } from "@store";

const SideBar: React.FC = () => {
  const todoStore = useContext(TodoContext);

  const [editingId, setEditingId] = useState<string>("");
  const addList = () => {
    setActivedId("");
    setEditingId(todoStore.addList());
  };
  const handleEdited = (title: string) => {
    todoStore.editList(editingId, { title });
    setEditingId("");
  };

  const [activedId, setActivedId] = useState<string>("0");
  const handleSelect = (id: string) => {
    setActivedId(id);
  };

  const getCurrentType = (id: string) => {
    if (id === editingId) return ListItemType.Editing;
    if (id === activedId) return ListItemType.Actived;
    return ListItemType.Normal;
  };

  return (
    <div className="w-80 min-h-screen bg-black bg-opacity-90">
      <div className="text-white p-3 font-thin text-opacity-60 text-sm">
        Dolldo
      </div>
      {todoStore.defaultLists.map(item => (
        <ListItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          type={getCurrentType(item.id)}
          onSelect={() => handleSelect(item.id)}
        ></ListItem>
      ))}
      <hr className="border-opacity-25 mx-6 my-2" />
      {todoStore.userLists.map(item => (
        <ListItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          type={getCurrentType(item.id)}
          onBlur={handleEdited}
          onSelect={() => handleSelect(item.id)}
        ></ListItem>
      ))}
      <CreateBtn addList={addList}></CreateBtn>
    </div>
  );
};

export default observer(SideBar);
