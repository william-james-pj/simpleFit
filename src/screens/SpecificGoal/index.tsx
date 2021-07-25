import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { BoxSpecificGoal } from "../../components/BoxSpecificGoals";
import { Message } from "../../components/Message";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import * as Interfaces from "../../utils/Interfaces";

import * as S from "./styles";

type Props = {
  route: RouteProp<Interfaces.RootStackParamList, "SpecificGoal">;
};

export function SpecificGoal({ route }: Props) {
  const [activeHeader, getScrollPosition] = useScrollPosition();
  const navigation = useNavigation<Interfaces.SpecificGoalRouteProp>();

  const { goals, title } = route.params;

  function handleGo(exercises: Interfaces.IItemExerciseGoals[], title: string) {
    navigation.navigate("ExerciseGoal", { exercises, title });
  }

  const renderRows = ({ item }: { item: Interfaces.IItemSpecificGoals }) => {
    return (
      <BoxSpecificGoal
        click={() => handleGo(item.elements || [], item.title)}
        specificGoals={item}
      />
    );
  };

  return (
    <>
      <Header back />
      <S.Wrapper>
        <Message title={title} text={`Let's go, User!`} active={activeHeader} />
        <S.FlatListS
          onScroll={(event) => {
            getScrollPosition(event);
          }}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={goals}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          renderItem={renderRows}
          keyExtractor={(item, index) => `${item.title}+${index}`}
        />
      </S.Wrapper>
    </>
  );
}
