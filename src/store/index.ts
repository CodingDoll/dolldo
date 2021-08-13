import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { nanoid } from "nanoid";
import _ from "lodash";
import moment, { Moment } from "moment";

moment();

interface Group {
  id: string;
  title: string;
  lists: List[];
}

export interface Todo {
  listId: string[];
  status: boolean; // true done; false not done
  id: string;
  title: string;

  step?: Step[];
  notification?: Moment;
  deadline?: Moment;
  repeat?: RepeatOptions;
  customRepeat?: { count: number; unit: string };
  description?: string;
}

export enum RepeatOptions {
  EveryDay,
  EveryWeekDay,
  EveryWeek,
  EveryMonth,
  EveryYear,
  Custom
}

interface Step {
  title: string;
  status: boolean; // true done; false not done
}
export interface List {
  id: string;
  icon: string;
  title: string;
  theme?: string;
}

export class TodoStore {
  groups: Group[] = [];
  defaultLists: List[] = [
    { id: "0", icon: "sun-line", title: "我的一天" },
    {
      id: "1",
      icon: "home-5-line",
      title: "任务"
    }
  ];
  userLists: List[] = [];
  currList: List = this.defaultLists[0];

  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrListById(id: string) {
    if (id.length === 1) {
      this.currList =
        this.defaultLists.find(i => i.id === id) ?? this.defaultLists[0];
    } else {
      this.currList =
        this.userLists.find(i => i.id === id) ?? this.defaultLists[0];
    }
  }

  addTodo(listId: string, data: { title: string }) {
    const todo = {
      id: nanoid(),
      listId: [listId],
      title: data.title,
      status: false
    };
    this.todos.push(todo);
  }

  getAllTodos(listId?: string) {
    if (listId) return this.todos.filter(i => i.listId.includes(listId));
    return this.todos;
  }

  todoDone() {}
  todoUndone() {}

  addList() {
    const l = {
      id: nanoid(),
      icon: "list-unordered",
      title: "无标题列表"
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
