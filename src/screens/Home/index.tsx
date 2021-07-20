import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { useGoalsSelector, useGoalsDispatch } from "../../hooks/useGoals";
import { fetchGoals } from "../../store/goals/actions";

import { Header } from "../../components/Header";
import { Message } from "../../components/Message";
import { BoxGoal } from "../../components/BoxGoal";
import { Loader } from "../../components/Loader";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import * as Interfaces from "../../utils/Interfaces";

import * as S from "./styles";

type HomeProps = DrawerScreenProps<Interfaces.RootStackParamList, "Home">;

export function Home({ navigation }: HomeProps) {
  const dispatch = useGoalsDispatch();
  const goalsState = useGoalsSelector((state) => state.goals);

  const [activeHeader, getScrollPosition] = useScrollPosition();
  const usenavigation = useNavigation<Interfaces.SpecificGoalRouteProp>();

  function handleGo(goals: Interfaces.IItemGoals[], title: string) {
    usenavigation.navigate("SpecificGoal", { goals, title });
  }

  const renderRows = ({ item }: Interfaces.IObjetoItem) => {
    return (
      <BoxGoal
        click={() => handleGo(item.goals || [], item.title)}
        item={item}
      />
    );
  };

  useEffect(() => {
    dispatch(fetchGoals());
  }, []);

  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <Message title="Home" text={`Hi, User!`} active={activeHeader} />

        {goalsState.loading ? (
          <Loader />
        ) : (
          <S.FlatListS
            onScroll={(event) => {
              getScrollPosition(event);
            }}
            contentContainerStyle={{ paddingBottom: 25 }}
            data={goalsState.data}
            ItemSeparatorComponent={() => <S.Separator></S.Separator>}
            renderItem={renderRows}
            keyExtractor={(item, index) => item.id}
          />
        )}
      </S.Wrapper>
    </>
  );
}
