import React from "react";

import { Header } from "../../components/Header";

import { Title, Wrapper } from "./styles";

export function Clock() {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>Clock</Title>
      </Wrapper>
    </>
  );
}
