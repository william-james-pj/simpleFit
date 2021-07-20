import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IItem } from "../../utils/Interfaces";
import { GoalsState } from "./types";

import { fetchGoals } from "./actions";

const initialState: GoalsState = {
  data: [],
  error: false,
  loading: false,
};

const goals = createSlice({
  name: "goals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGoals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGoals.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchGoals.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = goals.actions;
export default goals.reducer;
