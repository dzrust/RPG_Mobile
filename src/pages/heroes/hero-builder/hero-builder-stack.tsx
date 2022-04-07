import React, {FC} from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HeroIntro from "./hero-intro";
import {Hero} from "../../../models/hero";
import HeroJob from "./hero-job";

const Stack = createNativeStackNavigator();

export enum HERO_BUILDER_ROUTES {
  INTRO = "intro",
  JOB = "job",
  SKILL = "skill",
  INVENTORY = "inventory",
  HISTORY = "history",
  CONFIRMATION = "confirmation",
}

export type HeroBuilderStackParamList = {
  intro: {hero: Hero};
  job: {hero: Hero};
};

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "intro">;

const HeroBuilderStack: FC<Props> = ({route}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={HERO_BUILDER_ROUTES.INTRO}
        component={HeroIntro}
        initialParams={{hero: route.params.hero}}
      />
      <Stack.Screen
        name={HERO_BUILDER_ROUTES.JOB}
        component={HeroJob}
        initialParams={{hero: route.params.hero}}
      />
    </Stack.Navigator>
  );
};

export default HeroBuilderStack;
