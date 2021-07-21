import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  SpecificGoal: { goals: IItemSpecificGoals[]; title: string };
  ExerciseGoal: { exercises: IItemExerciseGoals[]; title: string };
  Clock: undefined;
  Calendar: undefined;
  User: undefined;
};

export interface IItemGoals {
  id: string;
  title: string;
  text: string;
  elements?: IItemSpecificGoals[];
}

export interface IItemSpecificGoals {
  id: string;
  title: string;
  text: string;
  finishing: boolean;
  elements?: IItemExerciseGoals[];
}

export interface IItemExerciseGoals {
  id: string;
  title: string;
  text: string;
  finishing: boolean;
}

export type SpecificGoalRouteProp = StackNavigationProp<
  RootStackParamList,
  "SpecificGoal"
>;
