import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider} from "native-base";
import React from "react";
import Router from "./router";

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
