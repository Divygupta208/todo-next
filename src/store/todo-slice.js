const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos: [],
    completedTodos: [],
  },

  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    removeTodos: (state, action) => {
      const id = action.payload;

      const newTodos = state.todos.filter((t) => t.id !== id);
      state.todos = newTodos;
    },
    addCompletedTodos: (state, action) => {
      state.completedTodos.push(action.payload);

      const id = action.payload.id;

      const newTodos = state.todos.filter((t) => t.id !== id);
      state.todos = newTodos;
    },
  },
});

export const todoAction = todoSlice.actions;
export default todoSlice;
