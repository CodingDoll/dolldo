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

  const stepCaption = props.todo.step && props.todo.step.length > 0 && (
    <span className="flex items-center mr-1">
      {`第 ${props.todo.step.filter(i => i.status).length} 步，共 ${
        props.todo.step.length
      } 步`}
    </span>
  );
  const setCaption = (value: Dayjs) => {
    // 使用 diff 比较天
    const dayDiff = dayjs().endOf("day").diff(value, "day");
    if (dayDiff === 0) return "今天";
    if (dayDiff === 1) return "昨天";
    if (dayDiff === -1) return "明天";
    else return value.format("MMMDD日，ddd");
  };
  const deadlineCaption = props.todo.deadline && (
    <span className="flex items-center mr-1">
      <i className="ri-calendar-line"></i>
      {setCaption(props.todo.deadline)}
    </span>
  );
  const repeatCaption = props.todo.repeat && (
    <span className="flex items-center mr-1">
      <i className="ri-refresh-line"></i>
    </span>
  );

  const notiCaption = props.todo.notification && (
    <span className="flex items-center">
      <i className="ri-notification-line"></i>
      {setCaption(props.todo.notification)}
    </span>
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
          {stepCaption}
          {deadlineCaption}
          {repeatCaption}
          {notiCaption}
        </div>
      </section>
    </div>
  );
};

export default observer(TodoItem);
