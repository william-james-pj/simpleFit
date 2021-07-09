import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  SpecificGoal: { goals: IItemGoals[]; title: string };
  Clock: undefined;
  Calendar: undefined;
  User: undefined;
};

export interface IItemGoals {
  title: string;
  text: string;
  currentGoal: number;
  totalGoal: number;
}

export interface IItem {
  id: string;
  title: string;
  text: string;
  currentGoal: number;
  totalGoal: number;
  goals: IItemGoals[];
}

export interface IObjetoItem {
  item: IItem;
}

export interface IObjetoItemGoals {
  item: IItemGoals;
}

export type SpecificGoalRouteProp = StackNavigationProp<
  RootStackParamList,
  "SpecificGoal"
>;
