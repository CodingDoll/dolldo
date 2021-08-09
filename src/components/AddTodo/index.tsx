import React, { useState } from "react";

const AddTodo: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState("添加任务");

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = e => {
    console.log(e.target.value);
    setTodoTitle("添加任务");
  };

  return (
    <div className="flex-none pb-8 pt-2">
      <div className="flex h-12 px-4 items-center rounded-md text-white text-sm bg-black bg-opacity-80 hover:bg-gray-900">
        <i className="ri-add-line text-lg mr-4"></i>
        <input
          className="bg-transparent focus:outline-none"
          type="text"
          value={todoTitle}
          onFocus={() => setTodoTitle("")}
          onBlur={handleBlur}
          onChange={e => setTodoTitle(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddTodo;
