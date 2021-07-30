import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GoalsState } from "./types";

import { fetchGoals, generateUuid } from "./actions";
import { IItemGoals, IItemSpecificGoals } from "../../@types/types";

const initialState: GoalsState = {
  data: [],
  dataSelected: { id: "", text: "", title: "" },
  error: false,
  loading: false,
};

const goals = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoalSelected(state, action: PayloadAction<IItemGoals>) {
      state.dataSelected = action.payload;
    },
    addGoals(state) {
      const newItem: IItemGoals = {
        id: generateUuid(state.data),
        title: "Adicione um título",
        text: "Adicione uma descrição",
        elements: [],
      };

      state.data.push(newItem);
    },
    updateGoals(state, action: PayloadAction<IItemGoals>) {
      state.data = state.data.map((goal) =>
        goal.id === action.payload.id ? action.payload : goal
      );
    },

    addSpecificGoals(state) {
      const newItem: IItemSpecificGoals = {
        id: generateUuid(state.dataSelected.elements || []),
        title: "Adicione um título",
        text: "Adicione uma descrição",
        finishing: false,
      };

      state.dataSelected.elements?.push(newItem);

      state.data.forEach((goal) => {
        goal.id === state.dataSelected.id ? goal.elements?.push(newItem) : goal;
      });
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

export const { updateGoals, addGoals, addSpecificGoals, addGoalSelected } =
  goals.actions;
export default goals.reducer;
