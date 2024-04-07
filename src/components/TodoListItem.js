import { todoAction } from "@/store/todo-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoListItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    dispatch(todoAction.removeTodos(todo.id));
  };

  const checkedTodosHandler = () => {
    setIsChecked(!isChecked);
    dispatch(todoAction.addCompletedTodos(todo));
  };

  return (
    <div className="ml-96 flex gap-5 mt-10 align-middle">
      <input
        type="checkbox"
        checked={isChecked}
        onClick={checkedTodosHandler}
      />
      <div className="mt-2">
        {todo.task} - {todo.description}
      </div>
      <button
        className="w-10 h-10 rounded-full bg-black text-white"
        onClick={deleteTodoHandler}
      >
        X
      </button>
    </div>
  );
};

export default TodoListItem;
