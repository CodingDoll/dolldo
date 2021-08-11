import React from "react";

import "./TodoList.css";
import TodoItem from "./TodoItem";
import { Todo } from "@store";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <div className="todo-list flex-1 py-4 overflow-y-auto">
      {props.todos.map(i => (
        <TodoItem title={i.title} />
      ))}
    </div>
  );
};

export default TodoList;
