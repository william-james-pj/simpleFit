import { IItemGoals } from "../../@types/types";

export interface GoalsState {
  data: IItemGoals[];
  error: boolean;
  loading: boolean;
}
