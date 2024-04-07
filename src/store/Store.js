import todoSlice from "./todo-slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export default store;
