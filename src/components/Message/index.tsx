import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

import * as S from "./styles";

interface IMessageProps {
  title: string;
  text: string;
  active: boolean;
}

export function Message({ title, text, active }: IMessageProps) {
  const [styleActive, setStyleActive] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [0, 100],
    outputRange: [110, 70],
  });

  const interpolatedOpacity = animatedOpacity.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
  });

  const interpolatedTop = animatedTop.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -22],
  });

  useEffect(() => {
    if (active) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(animatedHeight, {
            toValue: 100,
            duration: 400,
            useNativeDriver: false,
          }),
          Animated.timing(animatedOpacity, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(animatedTop, {
            toValue: 100,
            duration: 400,
            useNativeDriver: false,
          }),
        ]),
      ]).start(() => setStyleActive(false));
    } else {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(animatedHeight, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
          }),
          Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(animatedTop, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
          }),
        ]),
      ]).start(() => setStyleActive(true));
    }
    return () => {};
  }, [active]);

  return (
    <Animated.View
      style={{
        height: interpolatedHeight,
        overflow: "hidden",
      }}
    >
      <S.ViewContainer style={styleActive ? ShadowStyled : {}}>
        <S.ViewText>
          <Animated.Text style={{ opacity: interpolatedOpacity }}>
            <S.Text>{text}</S.Text>
          </Animated.Text>
          <Animated.Text style={{ top: interpolatedTop }}>
            <S.Title>{title}</S.Title>
          </Animated.Text>
        </S.ViewText>
        <S.ViewIcon>
          <Animated.View style={{ opacity: interpolatedOpacity }}>
            <S.Icon name="bell-alt" size={25} color="black" />
          </Animated.View>
        </S.ViewIcon>
      </S.ViewContainer>
    </Animated.View>
  );
}

const ShadowStyled = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};
