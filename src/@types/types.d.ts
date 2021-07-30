import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Goals: undefined;
  GoalsSpecific: undefined;
  GoalsExercise: { exercises: IItemExerciseGoals[]; title: string };
  Clock: undefined;
  Calendar: undefined;
  User: undefined;
};

type GoalsSpecificRouteProp = StackNavigationProp<
  RootStackParamList,
  "GoalsSpecific"
>;

interface IItemGoals {
  id: string;
  title: string;
  text: string;
  elements?: IItemSpecificGoals[];
}

interface IItemSpecificGoals {
  id: string;
  title: string;
  text: string;
  finishing: boolean;
  elements?: IItemExerciseGoals[];
}

interface IItemExerciseGoals {
  id: string;
  title: string;
  text: string;
  finishing: boolean;
}
