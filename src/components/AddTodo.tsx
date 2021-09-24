import React from "react";

interface Props {
  task: string;
  onSubmit: (e: React.FormEvent) => void;
  onChnage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddTodo = ({ task, onSubmit, onChnage }: Props) => {
  return (
    <form className="flex justify-center w-full" onSubmit={onSubmit}>
      <input
        className=" rounded shadow p-2 text-gray-500 mr-2 placeholder-gray-200"
        type="text"
        name="task"
        value={task}
        onChange={onChnage}
        placeholder="do ..."
      />
      <button className="shadow rounded text-gray-600 px-3" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
