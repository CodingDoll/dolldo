import React from "react";

import CheckBtn from "@components/CheckBtn";
import TodoStep from "@components/TodoStep";
import Cell from "@components/Cell";
import CellGroup from "@components/CellGroup";

const Detail: React.FC = () => {
  return (
    <div className="flex flex-col w-96 max-h-screen">
      <div className="body flex-1 overflow-y-auto bg-gray-100">
        <div className="pt-8 pb-2 bg-white">
          <div className="title flex items-center px-4 pb-2 text-gray-800 text-lg font-bold">
            <CheckBtn className="text-2xl mr-4" checked={false} />
            <span>去健身</span>
          </div>
          <TodoStep />
        </div>

        <div className="p-2 ">
          <Cell icon="sun-line" title="添加到“我的一天”" />
          <CellGroup>
            <Cell icon="alarm-line" title="提醒我" />
            <Cell icon="calendar-todo-line" title="添加截止日期" />
            <Cell icon="repeat-2-line" title="重复" />
          </CellGroup>
          <Cell icon="attachment-line" title="添加文件" />
        </div>
      </div>
      <div className="footer flex items-center justify-between bg-white p-4 py-2">
        <i className="ri-arrow-right-s-line text-2xl"></i>
        <span>创建于 4月27日，周二</span>
        <i className="ri-delete-bin-line"></i>
      </div>
    </div>
  );
};

export default Detail;
