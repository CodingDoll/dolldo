import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App";
import { TodoContext, TodoStore } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <TodoContext.Provider value={new TodoStore()}>
      <App />
    </TodoContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
