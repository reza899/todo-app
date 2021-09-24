import React from "react";

interface Props {
  task: string;
  onSubmit: (e: React.FormEvent) => void;
  onChnage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddTodo = ({ task, onSubmit, onChnage }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="task"></label>
      <input
        type="text"
        name="task"
        value={task}
        onChange={onChnage}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
