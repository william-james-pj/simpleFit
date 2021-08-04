import React from "react";

import * as S from "./styles";

interface IModalDelete {
  cancel: () => void;
  handleDelete: () => void;
}

export function ModalDelete({ cancel, handleDelete }: IModalDelete) {
  const deleteGoal = () => {
    handleDelete();
    cancel();
  };

  const cancelGoal = () => {
    cancel();
  };

  return (
    <S.Container>
      <S.ModalView style={ShadowStyled}>
        <S.Content>
          <S.Titulo>Deletar objetivo?</S.Titulo>
          <S.Text>Você tem certeza? Você não será capaz de recuperá-lo!</S.Text>
        </S.Content>
        <S.Footer>
          <S.Button onTouchStart={deleteGoal}>
            <S.Icon name="trash-alt" size={18} />
            <S.TextBottom>Deletar</S.TextBottom>
          </S.Button>

          <S.ButtonCancel onTouchStart={cancelGoal}>
            <S.TextCancel>Cancelar</S.TextCancel>
          </S.ButtonCancel>
        </S.Footer>
      </S.ModalView>
    </S.Container>
  );
}

const ShadowStyled = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
};
