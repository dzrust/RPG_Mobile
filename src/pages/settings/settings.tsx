import React from "react";
import auth from "@react-native-firebase/auth";
import {Button, Layout, Text} from "@ui-kitten/components";
import {pageStyles} from "../../styles/page";

const Settings = () => {
  const onSignOut = () => {
    auth().signOut();
  };
  return (
    <Layout style={pageStyles.container}>
      <Text category="h2" style={pageStyles.heading}>
        Settings Screen
      </Text>
      <Button onPress={onSignOut}>Sign Out</Button>
    </Layout>
  );
};

export default Settings;
