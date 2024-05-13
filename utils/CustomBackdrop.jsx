import React, { useMemo } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { colors, hexTransparencies } from "./Colors";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

const CustomBackdrop = ({ animatedIndex, style, onPress }) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: colors.primaryColorDark+hexTransparencies[80],
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View style={containerStyle} ><TouchableOpacity onPress={onPress} style={{flex: 1}}></TouchableOpacity></Animated.View>;
};

export default CustomBackdrop;