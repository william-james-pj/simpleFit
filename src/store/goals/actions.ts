import { createAsyncThunk } from "@reduxjs/toolkit";
import { DATA } from "../../data/goals";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchGoals = createAsyncThunk("goals/fetchGoals", async () => {
  await sleep(3000);
  return DATA;
});
