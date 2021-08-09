import React from "react";

import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  return (
    <div className="flex-1 py-4">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
