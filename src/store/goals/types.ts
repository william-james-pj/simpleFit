import { IItemGoals } from "../../@types/types";

export interface GoalsState {
  data: IItemGoals[];
  dataSelected: IItemGoals;
  error: boolean;
  loading: boolean;
  newGoal: boolean;
}
