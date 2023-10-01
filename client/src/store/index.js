import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./result-slice";

const store = configureStore({
  reducer: {
    result: resultSlice.reducer,
  },
});
export default store;
