import React from "react";

import TodoItem from "./TodoItem";
import { Todo } from "@store";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <div className="flex-1 py-4">
      {props.todos.map(i => (
        <TodoItem title={i.title} />
      ))}
    </div>
  );
};

export default TodoList;
