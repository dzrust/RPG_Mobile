import {Box, Text, useTheme} from "native-base";
import React from "react";

const Rules = () => {
  const {colors} = useTheme();
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center">
      <Text>Rules Screen</Text>
    </Box>
  );
};

export default Rules;
