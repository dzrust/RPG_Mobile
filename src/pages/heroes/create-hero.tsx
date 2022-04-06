import {Box, Text, useTheme} from "native-base";
import React from "react";

const CreateHero = () => {
  const {colors} = useTheme();
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center">
      <Text>Hero Creation Screen</Text>
    </Box>
  );
};

export default CreateHero;
