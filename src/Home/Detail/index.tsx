import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { RepeatOptions, Step, TodoContext } from "@store";

import CheckBtn from "@components/CheckBtn";
import TodoStep from "@components/TodoStep";
import Cell from "@components/Cell";
import CellGroup from "@components/CellGroup";
import Dropdown from "@components/Dropdown";
import { Dayjs } from "dayjs";

const Detail: React.FC = () => {
  const todoStore = useContext(TodoContext);
  const { currTodo } = todoStore;

  const toggleTodoDone = (checked: boolean) => {
    todoStore.setTodoStatus(currTodo!, checked);
  };

  const handleBack = () => {
    todoStore.setCurrTodo(null);
  };

  const removeTodo = () => {
    todoStore.removeTodo(currTodo!.id);
    todoStore.setCurrTodo(null);
  };

  const updateTodoTitle: React.ChangeEventHandler = e => {
    const title = (e.target as HTMLInputElement).value;
    todoStore.updateTodo(currTodo!, { title });
  };

  const setNotification = (value: Dayjs | null) => {
    todoStore.updateTodo(currTodo!, { notification: value });
  };

  const setDeadline = (value: Dayjs | null) => {
    todoStore.updateTodo(currTodo!, { deadline: value });
  };

  const setRepeat = (value: null | RepeatOptions) => {
    todoStore.updateTodo(currTodo!, { repeat: value });
  };

  const handleStepChange = (value: string | Step[] | null) => {
    if (typeof value === "string") {
      todoStore.addTodoStep(currTodo!, value);
    } else if (value) todoStore.setTodoSteps(currTodo!, value);
  };

  if (currTodo)
    return (
      <div className="flex flex-col w-96 min-h-screen max-h-screen">
        <div className="body flex-1 overflow-y-auto bg-gray-100">
          <div className="pt-8 pb-2 bg-white">
            <div className="title flex items-center px-4 pb-2 text-gray-800 text-lg font-bold">
              <CheckBtn
                className="text-2xl mr-4"
                checked={currTodo.status}
                onChange={toggleTodoDone}
              />

              <input
                className={`font-bold outline-none ${
                  currTodo.status ? "line-through" : ""
                }`}
                value={currTodo.title}
                onChange={updateTodoTitle}
              />
            </div>
            <TodoStep
              value={currTodo.step && [...currTodo.step]}
              onChange={handleStepChange}
            />
          </div>

          <div className="p-2 ">
            {todoStore.currList.id !== "0" && (
              <Cell icon="sun-line" title="添加到“我的一天”" />
            )}
            <CellGroup>
              <Dropdown.Notification
                value={currTodo.notification}
                onChange={setNotification}
              />
              <Dropdown.Deadline
                value={currTodo.deadline}
                onChange={setDeadline}
              />
              <Dropdown.Repeat value={currTodo.repeat} onChange={setRepeat} />
            </CellGroup>
            {/* <Cell icon="attachment-line" title="添加文件" /> */}
          </div>
        </div>
        <div className="footer flex items-center justify-between bg-white p-4 py-2">
          <i
            className="ri-arrow-right-s-line text-2xl cursor-pointer"
            onClick={handleBack}
          ></i>
          <span className="text-sm text-gray-700">
            创建于 {currTodo.createAt.format("MMMDD日，ddd")}
          </span>
          <i
            className="ri-delete-bin-line cursor-pointer"
            onClick={removeTodo}
          ></i>
        </div>
      </div>
    );
  return <></>;
};

export default observer(Detail);