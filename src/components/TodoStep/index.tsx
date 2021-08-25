import React, { ChangeEvent, FormEventHandler, useState } from "react";

import CheckBtn from "@components/CheckBtn";
import styles from "./TodoStep.module.css";
import { Step } from "@store";

type TodoStepProps = {
  value?: Step[];
  onChange?: (value: Step[] | string | null) => void;
};

const TodoStep: React.FC<TodoStepProps> = props => {

  const [inputing, setInputing] = useState(false);

  const handleInputFocus = () => {
    setInputing(true);
  };
  const handleInputBlur = () => {
    setInputing(false);
  };

  const handleRemove = (stepId: string) => {
    const steps = props.value ? [...props.value] : [];
    const targetIndex = steps.findIndex(i => i.id === stepId);
    steps.splice(targetIndex, 1);
    props.onChange && props.onChange(steps);
  };


  const handleAdding: React.KeyboardEventHandler = e => {
    if (e.key !== "Enter") return;
    props.onChange && props.onChange((e.target as HTMLInputElement).value);
    (e.target as HTMLInputElement).value = ""
  };

  const handleTitleChange = (e: ChangeEvent, stepId: string) => {
    const target = props.value!.find(i => i.id === stepId);
    target!.title = (e.target as HTMLInputElement).value;
    props.onChange && props.onChange(props.value!);
  };

  const handleStepStatus = (stepId: string, done: boolean) => {
    const target = props.value!.find(i => i.id === stepId);
    target!.status = done
    props.onChange && props.onChange(props.value!);
  };

  const steps = props.value ? [...props.value] : [];
  return (
    <>
      {steps.map(i => (
        <div
          key={i.id}
          className={`${styles["todo-step"]} flex items-center px-4 hover:bg-gray-100`}
        >
          <CheckBtn
            checked={i.status}
            onChange={checked => handleStepStatus(i.id, checked)}
            className="font-bold text-lg ml-0.5 mr-5"
          />
          <input
            className="text-sm flex-1 py-3 bg-transparent focus:outline-none border-b"
            defaultValue={i.title}
            onChange={e => handleTitleChange(e, i.id)}
          />
          <i
            className={`${styles["remove-btn"]} ri-close-line text-xl cursor-pointer`}
            onClick={() => handleRemove(i.id)}
          ></i>
        </div>
      ))}

      <div className="flex items-center py-3 px-4 ">
        {inputing ? (
          <i className="ri-checkbox-blank-circle-line font-bold text-lg ml-0.5 mr-5"></i>
        ) : (
          <i className="ri-add-line font-bold text-lg ml-0.5 mr-5 text-blue-500"></i>
        )}
        <input
          className={`${styles["todo-step"]} text-sm outline-none text-black`}

          placeholder={inputing ? "" : "添加步骤"}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyUp={handleAdding}
        />
      </div>
    </>
  );
};

export default TodoStep;
