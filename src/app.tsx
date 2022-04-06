import {NavigationContainer} from "@react-navigation/native";
import {extendTheme, NativeBaseProvider} from "native-base";
import React, {useEffect, useState} from "react";
import auth from "@react-native-firebase/auth";
import Router from "./router";

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};
export enum APP_STATE {
  INITIALIZING,
  LOGIN,
  LOGGED_IN,
}

const customTheme = extendTheme({config});
const App = () => {
  const [appState, setAppState] = useState(() => APP_STATE.INITIALIZING);

  // Handle user state changes
  const onAuthStateChanged = (user: unknown) => {
    if (user === null) {
      setAppState(APP_STATE.LOGIN);
    } else {
      setAppState(APP_STATE.LOGGED_IN);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={customTheme}>
        <Router appState={appState} />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
