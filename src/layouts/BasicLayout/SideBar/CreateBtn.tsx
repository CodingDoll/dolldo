import React from "react";
import { useContext } from "react";

import { TodoContext } from "../../../store";

const CreateBtn: React.FC = () => {
  const todoStore = useContext(TodoContext);

  const addLIst = () => {
    todoStore.addList();
  };

  return (
    <div className="flex">
      <div
        className="flex flex-1 px-5 py-3 cursor-pointer hover:bg-white hover:bg-opacity-5"
        onClick={addLIst}
      >
        <i className="ri-add-line text-sm text-white mr-4"></i>
        <div className="title text-white text-opacity-80 text-sm">新建列表</div>
      </div>
      <div className="p-3 cursor-pointer hover:bg-white hover:bg-opacity-5">
        <i className="ri-folder-add-line text-sm text-white"></i>
      </div>
    </div>
  );
};

export default CreateBtn;
