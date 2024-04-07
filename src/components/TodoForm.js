"use client";
import { todoAction } from "@/store/todo-slice";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const taskRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      task: taskRef.current.value,
      description: descriptionRef.current.value,
    };

    dispatch(todoAction.addTodos(newTodo));
  };

  return (
    <div className="mt-24 gap-2 ml-96">
      <input
        type="text"
        placeholder="Task"
        ref={taskRef}
        className="border-2 border-black mr-6"
      />
      <input
        type="text"
        placeholder="Description"
        ref={descriptionRef}
        className="border-2 border-black"
      />
      <button
        className="ml-2 rounded-full bg-green-500 w-10 h-10"
        onClick={addTodoHandler}
      >
        +
      </button>
      <Link href={"/checked"}>
        <button>Go to Completed</button>
      </Link>
    </div>
  );
};

export default TodoForm;
