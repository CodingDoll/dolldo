import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { nanoid } from "nanoid";

interface Group {
  id: string;
  title: string;
  lists: List[];
}

interface Todo {
  id: string;
  title: string;
}

interface List {
  id: string;
  title: string;
  todos: Todo[];
}

export class TodoStore {
  groups: Group[] = [];
  lists: List[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addList(title?: string) {
    const l = { id: nanoid(), title: title ?? "无标题列表", todos: [] };
    this.lists.push(l);
  }

  addGroup(group: Group) {
    this.groups.push(group);
  }
}

const todoStore = new TodoStore();

export const TodoContext = createContext<TodoStore>(todoStore);
