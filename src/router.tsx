import React, {FC} from "react";
import Home from "./pages/home/home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Settings from "./pages/settings/settings";
import {ROUTES} from "./models/routes";
import Legends from "./pages/legends/legends";
import Rules from "./pages/rules/rules";
import {APP_STATE} from "./app";
import Unauthenticated from "./pages/unathenticated/unauthenticated";
import Loader from "./pages/loader/loader";
import HeroStack from "./pages/heroes/hero-stack";
import {
  faHome,
  faScroll,
  faHelmetBattle,
  faBalanceScale,
  faRing,
  IconDefinition,
  faQuestion,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faHome as faHomeRegular,
  faScroll as faScrollRegular,
  faHelmetBattle as faHelmetBattleRegular,
  faBalanceScale as faBalanceScaleRegular,
  faRing as faRingRegular,
} from "@fortawesome/pro-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {colors} from "./styles/colors";

const Tab = createBottomTabNavigator();

const routeIconTable = new Map<
  ROUTES,
  {activeIcon: IconDefinition; inactiveIcon: IconDefinition}
>();

routeIconTable.set(ROUTES.HOME, {
  inactiveIcon: faHomeRegular,
  activeIcon: faHome,
});
routeIconTable.set(ROUTES.LEGENDS, {
  inactiveIcon: faScrollRegular,
  activeIcon: faScroll,
});
routeIconTable.set(ROUTES.HEROES, {
  inactiveIcon: faHelmetBattleRegular,
  activeIcon: faHelmetBattle,
});
routeIconTable.set(ROUTES.RULES, {
  inactiveIcon: faBalanceScaleRegular,
  activeIcon: faBalanceScale,
});
routeIconTable.set(ROUTES.SETTINGS, {
  inactiveIcon: faRingRegular,
  activeIcon: faRing,
});

const Router: FC<{appState: APP_STATE}> = ({appState}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon = routeIconTable.get(route.name as ROUTES);

          // You can return any component that you like here!
          return (
            <FontAwesomeIcon
              icon={
                (focused ? icon?.activeIcon : icon?.inactiveIcon) ?? faQuestion
              }
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: colors.text.heading,
        tabBarInactiveTintColor: colors.text.subscript,
        tabBarStyle: {backgroundColor: colors.backgroundSecondary},
      })}>
      {appState === APP_STATE.LOGGED_IN ? (
        <>
          <Tab.Screen name={ROUTES.HOME} component={Home} />
          <Tab.Screen name={ROUTES.LEGENDS} component={Legends} />
          <Tab.Screen name={ROUTES.HEROES} component={HeroStack} />
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
