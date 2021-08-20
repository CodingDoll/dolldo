import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
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

  return (
    <div
      className="flex rounded-md items-center px-4 bg-gray-900 h-12 mb-1 hover:bg-gray-800"
      onClick={toggleDetail}
    >
      <CheckBtn checked={checked} onChange={handleChange} />
      <div className="ml-4 text-sm text-white">{props.todo.title}</div>
    </div>
  );
};

export default observer(TodoItem);
