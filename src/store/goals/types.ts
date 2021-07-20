import { IItem } from "../../utils/Interfaces";

export interface GoalsState {
  data: IItem[];
  error: boolean;
  loading: boolean;
}
