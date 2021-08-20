import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { nanoid } from "nanoid";
import _ from "lodash";
import dayjs, { Dayjs } from "dayjs";

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
  createAt: Dayjs;
  step?: Step[];
  notification?: Dayjs;
  deadline?: Dayjs;
  repeat?: RepeatOptions;
  customRepeat?: { count: number; unit: string };
  description?: string;
}

type TodoOptions = Partial<Omit<Todo, "listId" | "id" | "createAt">>;

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
  currTodo: Todo | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrTodo(todo: Todo | null) {
    this.currTodo = todo;
  }

  setCurrListById(id: string) {
    if (id === this.currList.id) return;
    if (id.length === 1) {
      this.currList =
        this.defaultLists.find(i => i.id === id) ?? this.defaultLists[0];
    } else {
      this.currList =
        this.userLists.find(i => i.id === id) ?? this.defaultLists[0];
    }

    this.setCurrTodo(null);
  }

  addTodo(listId: string, data: { title: string }) {
    const todo = {
      id: nanoid(),
      listId: [listId],
      title: data.title,
      status: false,
      createAt: dayjs()
    };
    this.todos.push(todo);
  }

  updateTodo(todo: Todo, options: TodoOptions) {
    todo = { ...todo, ...options };
  }

  removeTodo(todoId: string) {
    const targetIndex = this.todos.findIndex(i => i.id === todoId);
    this.todos.splice(targetIndex, 1);
  }

  getAllTodos(listId?: string) {
    if (listId) return this.todos.filter(i => i.listId.includes(listId));
    return this.todos;
  }

  setTodoStatus(todo: Todo, cheked: boolean) {
    todo.status = cheked;
  }

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
