"use client";
import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const CompletedTodo = () => {
  const completedTodos = useSelector((state) => state.todo.completedTodos);

  return (
    <div>
      <ul>
        {completedTodos.map((todo) => (
          <TodoListItem todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodo;
