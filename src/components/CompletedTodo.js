"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { todoAction } from "@/store/todo-slice";

const CompletedTodo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/tasks", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      dispatch(todoAction.setTodos(data));
    };
    fetchTodos();
  }, []);
  return (
    <div>
      <ul>
        {todos.map((todo) => todo.completed && <TodoListItem todo={todo} />)}
      </ul>
    </div>
  );
};

export default CompletedTodo;
