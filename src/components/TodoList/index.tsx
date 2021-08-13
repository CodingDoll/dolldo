import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import TodoItem from "./TodoItem";
import { TodoContext, Todo } from "@store";

const TodoList: React.FC = () => {
  const todoStore = useContext(TodoContext);
  const todos = todoStore.getAllTodos(todoStore.currList.id);

  const undoneTodos = todos.filter(i => !i.status);
  const doneTodos = todos.filter(i => i.status);
  return (
    <div className="todo-list flex-1 py-4 overflow-y-auto">
      {undoneTodos.map(i => (
        <TodoItem status={i.status} title={i.title} />
      ))}
      {doneTodos.map(i => (
        <TodoItem status={i.status} title={i.title} />
      ))}
    </div>
  );
};

export default observer(TodoList);
