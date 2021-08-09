import React from "react";

import "./Content.css";
import AddTodo from "@components/AddTodo";
import TodoList from "@components/TodoList";
import { List } from "@store";

interface ContentProps {
  list: List;
}

const Content: React.FC<ContentProps> = props => {
  const iconClass =
    props.list.icon !== "list-unordered" ? "mr-4 ri-" + props.list.icon : "";

  return (
    <div className="content-container flex-1 flex flex-col pt-8 px-8">
      <div className="title flex-none flex relative text-white text-2xl font-semibold">
        <i className={iconClass}></i>
        <div>{props.list.title}</div>
      </div>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default Content;
