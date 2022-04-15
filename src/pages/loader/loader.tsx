import {faSword} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {Layout} from "@ui-kitten/components";
import React, {useEffect, useRef} from "react";
import {Animated} from "react-native";
import {pageStyles} from "../../styles/page";

const Loader = () => {
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
    <Layout
      style={{
        ...pageStyles.container,
        justifyContent: "center",
        alignContent: "center",
      }}>
      <Layout style={{flex: 1, flexDirection: "row"}}>
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
      </Layout>
    </Layout>
  );
};

export default Loader;
