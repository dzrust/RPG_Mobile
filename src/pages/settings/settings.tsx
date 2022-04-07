import {Box, Button, Text, useTheme, VStack} from "native-base";
import React from "react";
import auth from "@react-native-firebase/auth";

const Settings = () => {
  const {colors} = useTheme();
  const onSignOut = () => {
    auth().signOut();
  };
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center">
      <VStack>
        <Text>Settings Screen</Text>
        <Button onPress={onSignOut}>Sign Out</Button>
      </VStack>
    </Box>
  );
};

export default Settings;
