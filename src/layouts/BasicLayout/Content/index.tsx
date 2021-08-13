import React, { useContext } from "react";
import { TodoContext } from "@store";
import { observer } from "mobx-react-lite";

import "./Content.css";
import AddTodo from "@components/AddTodo";
import TodoList from "@components/TodoList";

const Content: React.FC = () => {
  const todoStore = useContext(TodoContext);

  const iconClass =
    todoStore.currList.icon !== "list-unordered"
      ? "mr-4 ri-" + todoStore.currList.icon
      : "";

  return (
    <div className="content-container flex-1 flex flex-col pt-8 px-8 max-h-screen">
      <div className="title pb-4 flex relative text-white text-2xl font-semibold">
        <i className={iconClass}></i>
        <div>{todoStore.currList.title}</div>
      </div>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default observer(Content);
