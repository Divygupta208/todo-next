"use client";
import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
