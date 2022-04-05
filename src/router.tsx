import React from "react";
import Home from "./pages/home/home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomNavigation from "./components/bottom-navigation";
import Settings from "./pages/settings/settings";

const Tab = createBottomTabNavigator();

export enum ROUTES {
  HOME = "home",
  SETTINGS = "settings",
}

const Router = () => {
  return (
    <Tab.Navigator tabBar={BottomNavigation}>
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default Router;
