import React from "react";

import "./Content.css";
import AddTodo from "@components/AddTodo";
import TodoList from "@components/TodoList";
import { Todo } from "@store";

interface ContentProps {
  icon: string;
  title: string;
  todos?: Todo[];
}

const Content: React.FC<ContentProps> = props => {
  const iconClass =
    props.icon !== "list-unordered" ? "mr-4 ri-" + props.icon : "";

  return (
    <div className="content-container flex-1 flex flex-col pt-8 px-8">
      <div className="title flex-none flex relative text-white text-3xl font-semibold">
        <i className={iconClass}></i>
        <div>{props.title}</div>
      </div>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default Content;
