import React from "react";
import { useContext } from "react";

import { TodoContext } from "@store";

interface CreateBtnProps {
  addList: () => void;
}

const CreateBtn: React.FC<CreateBtnProps> = props => {
  const todoStore = useContext(TodoContext);

  return (
    <div className="flex">
      <div
        className="flex flex-1 px-5 py-3 text-sm text-white cursor-pointer hover:bg-white hover:bg-opacity-5"
        onClick={props.addList}
      >
        <i className="ri-add-line mr-4"></i>
        <div className="title text-opacity-80">新建列表</div>
      </div>
      <div className="p-3 cursor-pointer hover:bg-white hover:bg-opacity-5">
        <i className="ri-folder-add-line text-sm text-white"></i>
      </div>
    </div>
  );
};

export default CreateBtn;
