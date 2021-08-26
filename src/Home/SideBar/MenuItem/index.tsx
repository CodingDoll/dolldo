import React, {
  useRef,
  useState,
  useEffect,
  FC,
  ChangeEventHandler,
  FocusEventHandler
} from "react";
import "./MenuItem.css";

export enum ListItemType {
  Normal = 0,
  Editing = 1,
  Actived = 2
}

interface ListItemProps {
  title: string;
  icon?: string;
  badge?: number;
  type?: ListItemType;
  onBlur?: (title: string) => void;
  onSelect?: () => void;
}

const ListItem: FC<ListItemProps> = props => {
  const iconClass = props.icon ? " ri-" + props.icon : " ri-list-unordered";

  const editInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    editInputRef.current?.focus();
    editInputRef.current?.select();
  }, []);

  const [editingTitle, setEditingTitle] = useState<string>("无标题列表");
  const titleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setEditingTitle(e.target.value);
  };
  const handleBlur: FocusEventHandler<HTMLInputElement> = e => {
    props.onBlur && props.onBlur(e.target.value);
  };
  const onEnterUp: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === "Enter" && props.onBlur)
      props.onBlur((e.target as any).value);
  };

  if (props.type === ListItemType.Editing) {
    return (
      <div className="flex text-sm text-white mr-1 border border-gray-700">
        <i
          className={
            "ml-1 py-3 px-4 hover:bg-white hover:bg-opacity-5" + iconClass
          }
        ></i>
        <input
          ref={editInputRef}
          className="title py-3 focus:outline-none bg-transparent border-none"
          value={editingTitle}
          onKeyUp={onEnterUp}
          onChange={titleChange}
          onBlur={handleBlur}
        />
      </div>
    );
  }

  const handleClick = () => {
    props.onSelect && props.onSelect();
  };

  const containerClass = () => {
    const base =
      "flex relative px-5 py-3 text-sm text-white cursor-pointer hover:bg-white hover:bg-opacity-5";
    const type =
      props.type === ListItemType.Normal
        ? ""
        : " text-purple-400 actived-indicator";
    return base + type;
  };

  return (
    <div className={containerClass()} onClick={handleClick}>
      <i className={"mr-4" + iconClass}></i>
      <div className="title text-opacity-80">{props.title}</div>
      <div className="badge"></div>
    </div>
  );
};

ListItem.defaultProps = {
  type: ListItemType.Normal
};

export default ListItem;
