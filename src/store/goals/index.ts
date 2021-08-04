import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GoalsState } from "./types";

import { fetchGoals, generateUuid } from "./actions";
import { IItemGoals, IItemSpecificGoals } from "../../@types/types";

const initialState: GoalsState = {
  data: [],
  dataSelected: { id: "", text: "", title: "" },
  error: false,
  loading: false,
  newGoal: false,
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

      state.newGoal = true;
    },
    updateGoals(state, action: PayloadAction<IItemGoals>) {
      state.data = state.data.map((goal) =>
        goal.id === action.payload.id ? action.payload : goal
      );
    },
    removeGoals(state, action: PayloadAction<string>) {
      state.data = state.data.filter((goal) => goal.id !== action.payload);
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

      state.newGoal = true;
    },
    removeSpecificGoals(state, action: PayloadAction<string>) {
      state.dataSelected.elements = state.dataSelected.elements?.filter(
        (element) => element.id !== action.payload
      );

      state.data.forEach((goal) => {
        goal.id === state.dataSelected.id
          ? (goal.elements = goal.elements?.filter(
              (element) => element.id !== action.payload
            ))
          : goal;
      });
    },

    resetNewGoal(state) {
      state.newGoal = false;
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

export const {
  addGoalSelected,

  addGoals,
  updateGoals,
  removeGoals,

  addSpecificGoals,
  removeSpecificGoals,

  resetNewGoal,
} = goals.actions;
export default goals.reducer;
