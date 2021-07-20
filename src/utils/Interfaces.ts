import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  SpecificGoal: { goals: IItemGoals[]; title: string };
  ExerciseGoal: { exercises: IItemExercise[]; title: string };
  Clock: undefined;
  Calendar: undefined;
  User: undefined;
};

export interface IItem {
  id: string;
  title: string;
  text: string;
  currentGoal: number;
  goals?: IItemGoals[];
}

export interface IItemGoals {
  title: string;
  text: string;
  currentGoal: number;
  exercises?: IItemExercise[];
}

export interface IItemExercise {
  title: string;
  text: string;
}

export interface IObjetoItem {
  item: IItem;
}

export interface IObjetoItemGoals {
  item: IItemGoals;
}

export interface IObjetoItemItemExercise {
  item: IItemExercise;
}

export type SpecificGoalRouteProp = StackNavigationProp<
  RootStackParamList,
  "SpecificGoal"
>;
