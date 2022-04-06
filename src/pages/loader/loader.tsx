import {faSword} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {Box, HStack, useTheme} from "native-base";
import React, {useEffect, useRef} from "react";
import {Animated} from "react-native";

const Loader = () => {
  const {colors} = useTheme();
  const swordAAnimation = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const swordBAnimation = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.loop(
        Animated.sequence([
          Animated.delay(250),
          Animated.timing(swordAAnimation, {
            useNativeDriver: true,
            toValue: 1,
            duration: 1500,
          }),
          Animated.delay(1250),
        ]),
      ),
      Animated.loop(
        Animated.sequence([
          Animated.delay(500),
          Animated.timing(swordBAnimation, {
            useNativeDriver: true,
            toValue: 1,
            duration: 1500,
          }),
          Animated.delay(1000),
        ]),
      ),
    ]);
    animation.start();
    return () => {
      animation.stop();
    };
  }, [swordAAnimation, swordBAnimation]);
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center">
      <HStack>
        <Animated.View // Special animatable View
          style={{
            opacity: swordAAnimation, // Bind opacity to animated value
          }}>
          <FontAwesomeIcon icon={faSword} size={64} />
        </Animated.View>
        <Animated.View // Special animatable View
          style={{
            opacity: swordBAnimation, // Bind opacity to animated value
          }}>
          <FontAwesomeIcon icon={faSword} size={64} transform={{flipX: true}} />
        </Animated.View>
      </HStack>
    </Box>
  );
};

export default Loader;
