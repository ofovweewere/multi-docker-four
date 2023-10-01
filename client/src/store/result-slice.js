import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: { loading: false, result: { data: [] } },
  reducers: {
    search(state) {
      state.loading = true;
      state.result.data = [];
    },
    searchComplete(state, response) {
      state.loading = false;
      state.result.data = response.payload;
    },
    searchError(state) {
      state.loading = false;
    },
    clearData(state) {
      state.result.data = [];
    },
  },
});

export const resultActions = resultSlice.actions;

export default resultSlice;
