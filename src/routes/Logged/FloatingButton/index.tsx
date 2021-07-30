import React, { useEffect, useRef, useState } from "react";

import { Path } from "react-native-svg";
import { FontAwesome5 } from "@expo/vector-icons";

import * as S from "./styles";
import { Animated } from "react-native";
import { useCurrentScreen } from "../../../hooks/useScreen";
import { useGoalsDispatch } from "../../../hooks/useGoals";
import { addGoals, addSpecificGoals } from "../../../store/goals";

interface FloatingButtonProps {
  bgColor: string;
}

export function FloatingButton({ bgColor }: FloatingButtonProps) {
  const dispatch = useGoalsDispatch();
  const { screen } = useCurrentScreen();
  const [open, setOpen] = useState(false);
  const buttonSize = useRef(new Animated.Value(1)).current;
  const mode = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    if (screen === "Goals") {
      dispatch(addGoals());
      return;
    }

    if (screen === "GoalsSpecific") {
      dispatch(addSpecificGoals());
      return;
    }

    if (screen === "GoalsExercise") {
      return;
    }

    handleAnimation();
  };

  useEffect(() => {
    if (open) handleAnimation();
    return () => {};
  }, [screen]);

  const handleAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(buttonSize, {
          toValue: 0.95,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(mode, {
          toValue: open ? 0 : 1,
          useNativeDriver: false,
        }),
      ]),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start();
    setOpen(!open);
  };

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const BallOneX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [18, -30],
  });

  const BallOneY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-15, -50],
  });

  const BallTwoX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 65],
  });

  const BallTwoY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-15, -50],
  });

  const BallThreeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 18],
  });

  const BallThreeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-15, -80],
  });

  return (
    <S.View>
      <SvgBackground color={bgColor} />

      <Animated.View
        style={{ position: "absolute", left: BallOneX, top: BallOneY }}
      >
        <S.Buttons>
          <S.TouchableOpacity
            onPress={() => console.log()}
          ></S.TouchableOpacity>
        </S.Buttons>
      </Animated.View>

      <Animated.View
        style={{ position: "absolute", left: BallTwoX, top: BallTwoY }}
      >
        <S.Buttons></S.Buttons>
      </Animated.View>

      <Animated.View
        style={{ position: "absolute", left: BallThreeX, top: BallThreeY }}
      >
        <S.Buttons></S.Buttons>
      </Animated.View>

      <Animated.View style={[sizeStyle]}>
        <S.TouchableOpacity onPress={handlePress}>
          <S.ActionButtonView>
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
              <FontAwesome5 name="plus" size={25} color={"white"} />
            </Animated.View>
          </S.ActionButtonView>
        </S.TouchableOpacity>
      </Animated.View>
    </S.View>
  );
}

function SvgBackground({ color = "" }) {
  return (
    <S.SvgStyle width={75} height={61} viewBox="0 0 75 61">
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </S.SvgStyle>
  );
}
