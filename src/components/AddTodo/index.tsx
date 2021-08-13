import React, { useRef, useState, useContext } from "react";

import { TodoContext } from "@store";

enum AddTodoStatus {
  Normal,
  Input
}

const AddTodo: React.FC = () => {
  const todoStore = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState<AddTodoStatus>(AddTodoStatus.Normal);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setStatus(AddTodoStatus.Input);
    inputRef.current?.focus();
  };

  const handleAdding = () => {
    if (todoTitle.trim())
      todoStore.addTodo(todoStore.currList.id, { title: todoTitle });
    setTodoTitle("");
  };
  const resetStatus = () => {
    if (!todoTitle) setStatus(AddTodoStatus.Normal);
  };
  const onEnterUp: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === "Enter") handleAdding();
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
          placeholder="添加任务"
          value={todoTitle}
          onBlur={resetStatus}
          onKeyUp={onEnterUp}
          onChange={e => setTodoTitle(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddTodo;
