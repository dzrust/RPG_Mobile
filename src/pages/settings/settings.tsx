import {Box, Text, useTheme} from "native-base";
import React from "react";

const Settings = () => {
  const {colors} = useTheme();
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center">
      <Text>Settings Screen</Text>
    </Box>
  );
};

export default Settings;
