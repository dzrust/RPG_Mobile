import {Box, Text, useTheme} from "native-base";
import React from "react";

const Legends = () => {
  const {colors} = useTheme();
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center">
      <Text>Legends Screen</Text>
    </Box>
  );
};

export default Legends;
