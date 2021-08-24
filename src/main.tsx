import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App";
import { TodoContext, TodoStore } from "./store";

dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

ReactDOM.render(
  <React.StrictMode>
    <TodoContext.Provider value={new TodoStore()}>
      <App />
    </TodoContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
