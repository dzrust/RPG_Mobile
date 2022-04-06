import React, {FC} from "react";
import Home from "./pages/home/home";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import BottomNavigation from "./components/bottom-navigation";
import Settings from "./pages/settings/settings";
import {ROUTES} from "./models/routes";
import Legends from "./pages/legends/legends";
import Heroes from "./pages/heroes/heroes";
import Rules from "./pages/rules/rules";
import {useTheme} from "native-base";
import {APP_STATE} from "./app";
import Unauthenticated from "./pages/unathenticated/unauthenticated";
import Loader from "./pages/loader/loader";

const Tab = createBottomTabNavigator();

const Router: FC<{appState: APP_STATE}> = ({appState}) => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary[100]},
        headerShown: false,
      }}
      tabBar={(props: BottomTabBarProps) =>
        appState === APP_STATE.LOGGED_IN ? (
          <BottomNavigation
            state={props.state}
            descriptors={props.descriptors}
            navigation={props.navigation}
            insets={props.insets}
          />
        ) : null
      }>
      {appState === APP_STATE.LOGGED_IN ? (
        <>
          <Tab.Screen name={ROUTES.HOME} component={Home} />
          <Tab.Screen name={ROUTES.LEGENDS} component={Legends} />
          <Tab.Screen name={ROUTES.HEROES} component={Heroes} />
          <Tab.Screen name={ROUTES.RULES} component={Rules} />
          <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
        </>
      ) : null}
      {appState === APP_STATE.LOGIN ? (
        <Tab.Screen name={ROUTES.LOGIN} component={Unauthenticated} />
      ) : null}
      {appState === APP_STATE.INITIALIZING ? (
        <Tab.Screen name={ROUTES.LOADING} component={Loader} />
      ) : null}
    </Tab.Navigator>
  );
};

export default Router;
