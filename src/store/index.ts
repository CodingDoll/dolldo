import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { nanoid } from "nanoid";
import _ from "lodash";

interface Group {
  id: string;
  title: string;
  lists: List[];
}

export interface Todo {
  id: string;
  title: string;
}

export interface List {
  id: string;
  icon: string;
  title: string;
  todos: Todo[] | (() => Todo[]);
}

export class TodoStore {
  groups: Group[] = [];
  defaultLists: List[] = [
    { id: "0", icon: "sun-line", title: "我的一天", todos: [] },
    {
      id: "1",
      icon: "home-5-line",
      title: "任务",
      todos: this.getAllTodos
    }
  ];
  userLists: List[] = [];

  private _currList: List = this.defaultLists[0];

  constructor() {
    makeAutoObservable(this);
  }

  set currList(value: any) {
    
    this._currList = value;
  }

  get currList() {
    return this._currList;
  }

  getAllTodos() {
    let allTodos: Todo[] = [];
    const todos = this.userLists.map(item => item.todos);
    allTodos = _.flattenDeep(todos as Todo[][]);

    return allTodos;
  }

  addList() {
    const l = {
      id: nanoid(),
      icon: "list-unordered",
      title: "无标题列表",
      todos: []
    };
    this.userLists.push(l);
    return l.id;
  }

  editList(id: string, data: { title?: string; icon?: string }) {
    const match = this.userLists.find(list => list.id === id);
    if (match) {
      match.title = data.title ? data.title : match.title;
      match.icon = data.icon ?? match.icon;
      return true;
    }
    return false;
  }

  addGroup(group: Group) {
    this.groups.push(group);
  }
}

const todoStore = new TodoStore();

export const TodoContext = createContext<TodoStore>(todoStore);
