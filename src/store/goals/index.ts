import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GoalsState } from "./types";

import { fetchGoals } from "./actions";
import { IItemGoals } from "../../@types/types";

const initialState: GoalsState = {
  data: [],
  error: false,
  loading: false,
};

const goals = createSlice({
  name: "goals",
  initialState,
  reducers: {
    updateGoals(state, action: PayloadAction<IItemGoals>) {
      state.data = state.data.map((goal) =>
        goal.id === action.payload.id ? action.payload : goal
      );
    },
  },
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

export const { updateGoals } = goals.actions;
export default goals.reducer;
