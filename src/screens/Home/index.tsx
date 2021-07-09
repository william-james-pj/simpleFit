import React from "react";

import { Header } from "../../components/Header";
import { Message } from "../../components/Message";
import { BoxGoal } from "../../components/BoxGoal";
import * as Interfaces from "../../utils/Interfaces";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation<Interfaces.SpecificGoalRouteProp>();

  function handleGo(goals: Interfaces.IItemGoals[], title: string) {
    navigation.navigate("SpecificGoal", { goals, title });
  }

  const renderRows = ({ item }: Interfaces.IObjetoItem) => {
    return (
      <BoxGoal click={() => handleGo(item.goals, item.title)} item={item} />
    );
  };
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.FlatListS
          ListHeaderComponent={<Message title="Home" />}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={DATA}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          renderItem={renderRows}
          keyExtractor={(item, index) => item.id}
        />
      </S.Wrapper>
    </>
  );
}

const DATA: Interfaces.IItem[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Treino",
    text: "Testando contador de caracterespara ter noção em quanto limitar no card do meu mais novo aplicativo.",
    currentGoal: 2,
    totalGoal: 4,
    goals: [
      {
        title: "Full Body",
        text: "Resulmo do treino, com músculo a serem treinados por exemplo",
        currentGoal: 15,
        totalGoal: 15,
      },
      {
        title: "Costas",
        text: "Resulmo do treino, com músculo a serem treinados por exemplo",
        currentGoal: 12,
        totalGoal: 15,
      },
    ],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Leitura",
    text: "Testando contador de caracterespara ter noção em quanto limitar no card do meu mais novo aplicativo.",
    currentGoal: 5,
    totalGoal: 10,
    goals: [
      {
        title: "Livro 1",
        text: "Quantidade de páginas para serem lidas a cada dia",
        currentGoal: 1,
        totalGoal: 10,
      },
      {
        title: "Livro 2",
        text: "Quantidade de páginas para serem lidas a cada dia",
        currentGoal: 8,
        totalGoal: 10,
      },
    ],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Ingles",
    text: "Testando contador de caracterespara ter noção em quanto limitar no card do meu mais novo aplicativo.",
    currentGoal: 2,
    totalGoal: 6,
    goals: [
      {
        title: "Presente",
        text: "Assuntos a aprender sobre presente em inglês",
        currentGoal: 1,
        totalGoal: 5,
      },
      {
        title: "Pronomes",
        text: "Assuntos a aprender sobre pronomes em inglês",
        currentGoal: 2,
        totalGoal: 6,
      },
    ],
  },
];
