import React, {FC} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HeroIntro from "./hero-intro";
import HeroJob from "./hero-job";
import HeroSkill from "./hero-skill";

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
  intro: undefined;
  job: undefined;
  skill: undefined;
};

const HeroBuilderStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HERO_BUILDER_ROUTES.INTRO} component={HeroIntro} />
      <Stack.Screen name={HERO_BUILDER_ROUTES.JOB} component={HeroJob} />
      <Stack.Screen name={HERO_BUILDER_ROUTES.SKILL} component={HeroSkill} />
    </Stack.Navigator>
  );
};

export default HeroBuilderStack;
