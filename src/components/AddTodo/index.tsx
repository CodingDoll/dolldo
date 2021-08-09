import React, { useRef, useState } from "react";

enum AddTodoStatus {
  Normal,
  Input
}

const AddTodo: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState("添加任务");
  const [status, setStatus] = useState<AddTodoStatus>(AddTodoStatus.Normal);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setStatus(AddTodoStatus.Input);
    inputRef.current?.focus();
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setStatus(AddTodoStatus.Normal);
    setTodoTitle("添加任务");
  };

  return (
    <div className="flex-none pb-8 pt-2">
      <div
        className="flex h-12 px-4 items-center rounded-md text-white text-sm bg-black bg-opacity-80 hover:bg-gray-900"
        onClick={handleClick}
      >
        <i
          className={
            (status === AddTodoStatus.Normal
              ? "ri-add-line"
              : "ri-checkbox-blank-circle-line") + " text-lg mr-4"
          }
        ></i>
        <input
          ref={inputRef}
          className="flex-1 bg-transparent focus:outline-none"
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
