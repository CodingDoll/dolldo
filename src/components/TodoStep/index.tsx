import React from "react";

import CheckBtn from "@components/CheckBtn";

const TodoStep: React.FC = () => {
  return (
    <>
      <div className="flex items-center py-3 px-4 text-blue-500">
        <i className="ri-add-line font-bold text-lg ml-0.5 mr-5"></i>
        <span className="text-sm">添加步骤</span>
      </div>
      {/* <div className="flex items-center py-3 px-4">
        <i className="ri-checkbox-blank-circle-line font-bold text-lg ml-0.5 mr-5"></i>
        <input
          className="text-sm flex-1 bg-transparent focus:outline-none"
          type="text"
        />
      </div>
      <div className="flex items-center px-4 hover:bg-gray-100">
        <CheckBtn checked={false} className="font-bold text-lg ml-0.5 mr-5" />
        <input
          className="text-sm flex-1 py-3 bg-transparent focus:outline-none border-b"
          value="我的体育迷"
        />
      </div> */}
    </>
  );
};

export default TodoStep;
