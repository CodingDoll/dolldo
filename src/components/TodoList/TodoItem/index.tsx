import React, { useState } from "react";

import CheckBtn from "@components/CheckBtn";

interface TodoItemProps {
  title: string;
  status: boolean;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  const [checked, setChecked] = useState(props.status);

  const handleChange = (checked: any) => {
    setChecked(checked);
  };

  return (
    <div className="flex rounded-md items-center px-4 bg-gray-900 h-12 mb-1 hover:bg-gray-800">
      <CheckBtn checked={checked} onChange={handleChange} />
      <div className="ml-4 text-sm text-white">{props.title}</div>
    </div>
  );
};

export default TodoItem;
