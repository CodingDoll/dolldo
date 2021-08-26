import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";

import ListItem, { ListItemType } from "./MenuItem";
import CreateBtn from "./CreateBtn";
import { TodoContext } from "@store";

const SideBar: React.FC = () => {
  const todoStore = useContext(TodoContext);

  const [editingId, setEditingId] = useState<string>("");
  const [activedId, setActivedId] = useState<string>("0");
  const addList = () => {
    setActivedId("");
    const id = todoStore.addList();
    setEditingId(id);
    todoStore.setCurrListById(id);
  };
  const handleEdited = (title: string) => {
    todoStore.editList(editingId, { title });
    setEditingId("");
    setActivedId(editingId);
  };
  const handleSelect = (id: string) => {
    setActivedId(id);
    todoStore.setCurrListById(id);
    hideSideBar();
  };

  const getCurrentType = (id: string) => {
    if (id === editingId) return ListItemType.Editing;
    if (id === activedId) return ListItemType.Actived;
    return ListItemType.Normal;
  };

  const [sideBarClassNames, setSideBarClassNames] = useState("-left-80");
  const [maskClassNames, setMaskClassNames] = useState("hidden md:hidden");

  const showSideBar = () => {
    setSideBarClassNames("left-0");
    setMaskClassNames("absolute inset-0 z-10 bg-black bg-opacity-40 md:hidden");
  };

  const hideSideBar = () => {
    setSideBarClassNames("-left-80");
    setMaskClassNames("hidden md:hidden");
  };

  return (
    <>
      <button
        className="absolute md:hidden z-20 text-white text-2xl top-0 left-6 p-2 hover:bg-black hover:bg-opacity-20"
        onClick={showSideBar}
      >
        <i className="ri-menu-2-line "></i>
      </button>
      <div className={maskClassNames} onClick={hideSideBar}></div>
      <div
        className={`absolute top-0 z-20 w-80 md:static min-h-screen bg-black bg-opacity-90 transition-all ${sideBarClassNames}`}
      >
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
    </>
  );
};

export default observer(SideBar);
