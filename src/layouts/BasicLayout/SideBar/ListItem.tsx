import React from "react";

enum ListItemStatus {
  Normal = 0,
  Editing = 1
}

interface ListItemProps {
  title: string;
  icon?: string;
  badge?: number;
  status?: ListItemStatus;
}

const ListItem: React.FC<ListItemProps> = props => {
  if (props.status === ListItemStatus.Editing) {
    return (
      <div className="flex px-5 py-3">
        <i
          className={
            (props.icon ? "ri-" + props.icon : "ri-list-unordered") +
            " text-sm text-white mr-4"
          }
        ></i>
        <div className="title text-white text-opacity-80 text-sm">
          {props.title}
        </div>
      </div>
    );
  }

  return (
    <div className="flex px-5 py-3 cursor-pointer hover:bg-white hover:bg-opacity-5">
      <i
        className={
          (props.icon ? "ri-" + props.icon : "ri-list-unordered") +
          " text-sm text-white mr-4"
        }
      ></i>
      <div className="title text-white text-opacity-80 text-sm">
        {props.title}
      </div>
      <div className="badge"></div>
    </div>
  );
};

ListItem.defaultProps = {
  status: ListItemStatus.Normal
};

export default ListItem;
