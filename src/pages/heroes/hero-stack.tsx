import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Heroes from "./heroes";
import Hero from "./hero";
import HeroBuilderStack from "./hero-builder/hero-builder-stack";

const Stack = createNativeStackNavigator();

export enum HEROES_ROUTES {
  HEROES = "heroes",
  HERO = "hero",
  HERO_BUILDER = "hero-builder",
}

export type HeroStackParamList = {
  hero: {id: string};
  heroes: undefined;
  "hero-builder": undefined;
};

const HeroStack = () => (
  <Stack.Navigator
    initialRouteName={HEROES_ROUTES.HEROES}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={HEROES_ROUTES.HEROES} component={Heroes} />
    <Stack.Screen name={HEROES_ROUTES.HERO} component={Hero} />
    <Stack.Screen
      name={HEROES_ROUTES.HERO_BUILDER}
      component={HeroBuilderStack}
    />
  </Stack.Navigator>
);

export default HeroStack;
