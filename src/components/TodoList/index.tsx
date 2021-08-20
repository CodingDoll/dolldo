import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import TodoItem from "./TodoItem";
import { TodoContext, Todo } from "@store";

const TodoList: React.FC = () => {
  const todoStore = useContext(TodoContext);
  const todos = todoStore.getAllTodos(todoStore.currList.id);
  const [showDoneList, setShowDoneList] = useState(true);

  const rotateDoneListIconClassName = showDoneList ? "rotate-90" : "";
  const undoneTodos = todos.filter(i => !i.status);
  const doneTodos = todos.filter(i => i.status);

  const toggleDoneList = () => {
    setShowDoneList(!showDoneList);
  };

  return (
    <div className="todo-list flex-1 py-4 overflow-y-auto">
      {undoneTodos.map(i => (
        <TodoItem todo={i} key={i.id} />
      ))}
      {doneTodos.length > 0 && (
        <button
          className="flex items-center text-gray-300 text-sm bg-black bg-opacity-50 rounded p-1 pr-2 mb-1 hover:bg-opacity-70 hover:text-white"
          onClick={toggleDoneList}
        >
          <i
            className={
              "transition-all transform ri-arrow-right-s-line " +
              rotateDoneListIconClassName
            }
          ></i>
          <span className="px-1">已完成</span>
          <span>{doneTodos.length}</span>
        </button>
      )}
      {showDoneList ? doneTodos.map(i => <TodoItem todo={i} key={i.id} />) : ""}
    </div>
  );
};

export default observer(TodoList);
