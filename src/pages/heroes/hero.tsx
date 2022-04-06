import {Box, Text, useTheme} from "native-base";
import React from "react";

const Hero = () => {
  const {colors} = useTheme();
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center">
      <Text>Hero Screen</Text>
    </Box>
  );
};

export default Hero;
