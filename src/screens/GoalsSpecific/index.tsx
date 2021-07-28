import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { BoxSpecificGoal } from "./BoxSpecificGoals";
import { Message } from "../../components/Message";
import { useScrollPosition } from "../../hooks/useScrollPosition";

import {
  GoalsSpecificRouteProp,
  IItemExerciseGoals,
  IItemSpecificGoals,
  RootStackParamList,
} from "../../@types/types";

import * as S from "./styles";

type Props = {
  route: RouteProp<RootStackParamList, "GoalsSpecific">;
};

export function GoalsSpecific({ route }: Props) {
  const [activeHeader, getScrollPosition] = useScrollPosition();
  const navigation = useNavigation<GoalsSpecificRouteProp>();

  const { goals, title } = route.params;

  function handleGo(exercises: IItemExerciseGoals[], title: string) {
    navigation.navigate("GoalsExercise", { exercises, title });
  }

  const renderRows = ({ item }: { item: IItemSpecificGoals }) => {
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
          renderItem={renderRows}
          keyExtractor={(item, index) => `${item.title}+${index}`}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
        />
      </S.Wrapper>
    </>
  );
}
