import React from "react";

import { Header } from "../../components/Header";

import { Title, Wrapper } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>Home</Title>
      </Wrapper>
    </>
  );
}
