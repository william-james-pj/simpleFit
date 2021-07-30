import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { useGoalsSelector, useGoalsDispatch } from "../../hooks/useGoals";
import { fetchGoals } from "../../store/goals/actions";
import { addGoalSelected } from "../../store/goals";

import { Header } from "../../components/Header";
import { Message } from "../../components/Message";
import { BoxGoal } from "./BoxGoal";
import { Loader } from "../../components/Loader";
import { useScrollPosition } from "../../hooks/useScrollPosition";

import {
  GoalsSpecificRouteProp,
  IItemGoals,
  IItemSpecificGoals,
  RootStackParamList,
} from "../../@types/types";

import * as S from "./styles";

type GoalsProps = DrawerScreenProps<RootStackParamList, "Goals">;

export function Goals({ navigation }: GoalsProps) {
  const flatList = useRef<FlatList<IItemGoals>>(null);
  const dispatch = useGoalsDispatch();
  const goalsState = useGoalsSelector((state) => state.goals);

  const [activeHeader, getScrollPosition] = useScrollPosition();
  const usenavigation = useNavigation<GoalsSpecificRouteProp>();

  function handleGo(goal: IItemGoals) {
    dispatch(addGoalSelected(goal));
    usenavigation.navigate("GoalsSpecific");
  }

  const renderRows = ({ item }: { item: IItemGoals }) => {
    return <BoxGoal click={() => handleGo(item)} goals={item} />;
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
            ref={flatList}
            onScroll={(event) => {
              getScrollPosition(event);
            }}
            removeClippedSubviews={false}
            contentContainerStyle={{ paddingBottom: 25 }}
            data={goalsState.data}
            renderItem={renderRows}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <S.Separator></S.Separator>}
            ListFooterComponent={() => <S.FooterView></S.FooterView>}
            onContentSizeChange={() =>
              flatList.current?.scrollToEnd({ animated: true })
            }
          />
        )}
      </S.Wrapper>
    </>
  );
}
