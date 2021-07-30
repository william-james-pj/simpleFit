import uuid from "react-native-uuid";
import { IItemGoals, IItemSpecificGoals } from "../../@types/types";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { DATA } from "../../data/goals";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchGoals = createAsyncThunk("goals/fetchGoals", async () => {
  await sleep(3000);
  return DATA;
});

export const generateUuid = (
  data: IItemGoals[] | IItemSpecificGoals[]
): string => {
  let id = `${uuid.v4()}`;

  while (data.some((element) => element.id === `${id}`)) {
    id = `${uuid.v4()}`;
  }

  return id;
};
