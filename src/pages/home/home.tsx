import {Box, Text, useTheme} from "native-base";
import React from "react";

const Home = () => {
  const {colors} = useTheme();
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg={colors.primary[100]}>
      <Text>
        Here is where you can find updates that have been released. Happy
        gaming!
      </Text>
    </Box>
  );
};

export default Home;
