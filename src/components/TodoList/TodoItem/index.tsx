import React from "react";

import CheckBtn from "@components/CheckBtn";

interface TodoItemProps {
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  return (
    <div className="flex rounded-md items-center px-4 bg-gray-900 h-12 mb-1 hover:bg-gray-800">
      <CheckBtn checked={false} />
      <div className="ml-4 text-sm text-white">{props.title}</div>
    </div>
  );
};

export default TodoItem;
