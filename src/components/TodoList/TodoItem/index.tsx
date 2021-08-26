import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import dayjs, { Dayjs } from "dayjs";

import { Todo, TodoContext } from "@store";
import CheckBtn from "@components/CheckBtn";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  const todoStore = useContext(TodoContext);

  const [checked, setChecked] = useState(props.todo.status);

  const toggleDetail = () => {
    if (todoStore.currTodo === props.todo) {
      todoStore.setCurrTodo(null);
    } else todoStore.setCurrTodo(props.todo);
  };

  const handleChange = (checked: any) => {
    todoStore.setTodoStatus(props.todo, checked);
    setChecked(checked);
  };

  const stepCaption =
    props.todo.step &&
    props.todo.step.length > 0 &&
    `第 ${props.todo.step.filter(i => i.status).length} 步，共 ${
      props.todo.step.length
    } 步`;

  const setDeadline = (value: Dayjs) => {
    // 使用 diff 比较天
    const dayDiff = dayjs().endOf("day").diff(value, "day");
    if (dayDiff === 0) return "今天";
    if (dayDiff === 1) return "昨天";
    if (dayDiff === -1) return "明天";
    else return value.format("MMMDD日，ddd");
  };
  const deadlineCaption = props.todo.deadline && (
    <>
      <i className="ri-calendar-line"></i>
      {setDeadline(props.todo.deadline)}
    </>
  );
  const repeatCaption = props.todo.repeat && (
    <i className="ri-refresh-line"></i>
  );

  const notiCaption = props.todo.notification && (
    <i className="ri-notification-line"></i>
  );

  return (
    <div
      className="flex rounded-md items-center px-4 bg-gray-900 h-12 mb-1 hover:bg-gray-800"
      onClick={toggleDetail}
    >
      <CheckBtn checked={checked} onChange={handleChange} />
      <section className="ml-4">
        <div className="text-sm text-white">{props.todo.title}</div>
        <div className="flex items-center text-gray-400 text-xs">
          <span className="flex items-center mr-1">{stepCaption}</span>
          <span className="flex items-center mr-1">{deadlineCaption}</span>
          <span className="flex items-center mr-1">{repeatCaption}</span>
          <span className="flex items-center">{notiCaption}</span>
        </div>
      </section>
    </div>
  );
};

export default observer(TodoItem);
