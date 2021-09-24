import React, { useState } from "react";
import { todoData } from "../Dummy_Todo";
import { TodoData } from "../models/Todo";
import AddTodo from "./AddTodo";
import Row from "./Row";

const Todo = () => {
  const [todos, setTodos] = useState(todoData);
  const [task, setTask] = useState("");

  const todoLength = todos.length;
  const hasTodo = todoLength > 0;
  const remainingTodos = todos.filter(
    (todo) => todo.isCompleted !== true
  ).length;

  const deleteTodoHandler = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const checkTodoHandler = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const changeTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTask(value);
  };

  const addTodoHandler = (todo: TodoData) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTask("");
  };

  const submitTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const todo: TodoData = {
      id: Math.random().toString(),
      task: task,
      isCompleted: false,
    };
    task && addTodoHandler(todo);
  };

  return (
    <div>
      <AddTodo
        onSubmit={submitTodoHandler}
        onChnage={changeTodoHandler}
        task={task}
      />
      {todos.map((todo) => {
        return (
          <Row
            todo={todo}
            onDelete={deleteTodoHandler}
            onCheck={checkTodoHandler}
          />
        );
      })}

      {hasTodo && <p>{`${remainingTodos} of ${todoLength}`}</p>}
      {!hasTodo && <p>Add new todo!</p>}
    </div>
  );
};

export default Todo;
