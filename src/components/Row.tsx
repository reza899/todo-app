import React from "react";
import { TodoData } from "../models/Todo";

interface Props {
  todo: TodoData;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
}
const Row = ({ todo: { task, isCompleted, id }, onDelete, onCheck }: Props) => {
  return (
    <div>
      <p>{task}</p>
      <div>
        <button onClick={() => onDelete(id)}>x</button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onCheck(id)}
        />
      </div>
    </div>
  );
};

export default Row;
