import {AFFINITY} from "./affinity";
import {Item, itemFormModel} from "./item";
import {Level, levelArray} from "./level";
import {Mastery, masteryFormModel} from "./mastery";
import * as yup from "yup";
import {RATING} from "./rating";

export enum GENDER {
  MALE = "male",
  FEMALE = "female",
}

export type Hero = {
  id: string;
  name: string;
  race: string;
  heroClass: string;
  gender: string;
  job?: string;
  affinity: AFFINITY;
  experience: number;
  level: Level;
  totalHealth: number;
  currentHealth: number;
  potency: number;
  finesse: number;
  vigor: number;
  primaryMastery: Mastery;
  secondaryMastery: Mastery;
  innateMastery1: Mastery;
  innateMastery2: Mastery;
  masteries: {
    mastery1?: Mastery;
    mastery2?: Mastery;
    mastery3?: Mastery;
    mastery4?: Mastery;
    mastery5?: Mastery;
    mastery6?: Mastery;
    mastery7?: Mastery;
    mastery8?: Mastery;
    mastery9?: Mastery;
    mastery10?: Mastery;
  };
  primaryWeapon: Item;
  secondaryWeapon: Item;
  armor: Item[];
  money: number;
  inventory: Item[];
  backstory: string;
  morality: string;
  quirks: string[];
  habits: string[];
  strengths: string[];
  weaknesses: string[];
};

export const createHero = (): Hero => ({
  id: "",
  name: "",
  race: "",
  heroClass: "",
  gender: "",
  job: "",
  affinity: AFFINITY.POTENCY,
  experience: 0,
  level: 1,
  totalHealth: 1,
  currentHealth: 1,
  potency: 1,
  finesse: 1,
  vigor: 1,
  primaryMastery: {
    name: "",
    description: "",
    affinityStats: [],
  },
  secondaryMastery: {
    name: "",
    description: "",
    affinityStats: [],
  },
  innateMastery1: {name: "", description: "", affinityStats: []},
  innateMastery2: {name: "", description: "", affinityStats: []},
  masteries: {},
  primaryWeapon: {
    name: "",
    description: "",
    affinityStats: [],
    rating: RATING.COMMON,
  },
  secondaryWeapon: {
    name: "",
    description: "",
    affinityStats: [],
    rating: RATING.COMMON,
  },
  armor: [],
  money: 0,
  inventory: [],
  backstory: "",
  morality: "",
  quirks: [],
  habits: [],
  strengths: [],
  weaknesses: [],
});

export const heroIntroFormModel = yup.object().shape({
  name: yup.string().required(),
  race: yup.string().required(),
  gender: yup.string().required(),
  affinity: yup
    .string()
    .oneOf([AFFINITY.FINESSE, AFFINITY.POTENCY, AFFINITY.VIGOR])
    .required(),
  secondaryAffinity: yup
    .string()
    .oneOf([AFFINITY.FINESSE, AFFINITY.POTENCY, AFFINITY.VIGOR])
    .required(),
});

export interface HeroIntroFormModel
  extends yup.InferType<typeof heroIntroFormModel> {}

export const heroJobFormModel = yup.object().shape({
  heroClass: yup.string().required(),
  level: yup.number().oneOf(levelArray).required(),
  job: yup.string(),
});

export interface HeroJobFormModel
  extends yup.InferType<typeof heroJobFormModel> {}

export const heroSkillFormModel = yup.object().shape({
  hp: yup.number().min(1).max(999999).required(),
  potency: yup.number().min(1).max(100).required(),
  finesse: yup.number().min(1).max(100).required(),
  vigor: yup.number().min(1).max(100).required(),
  job: yup.string(),
  experience: yup.number().min(0).max(355000),
  primaryMastery: masteryFormModel.required(),
  secondaryMastery: masteryFormModel.required(),
  innateMastery1: masteryFormModel.required(),
  innateMastery2: masteryFormModel.required(),
  mastery1: masteryFormModel,
  mastery2: masteryFormModel,
  mastery3: masteryFormModel,
  mastery4: masteryFormModel,
  mastery5: masteryFormModel,
  mastery6: masteryFormModel,
  mastery7: masteryFormModel,
  mastery8: masteryFormModel,
  mastery9: masteryFormModel,
  mastery10: masteryFormModel,
});

export interface HeroSkillFormModel
  extends yup.InferType<typeof heroSkillFormModel> {}

export const heroInventoryFormModel = yup.object().shape({
  primaryWeapon: itemFormModel.required(),
  secondaryWeapon: itemFormModel.required(),
  armor: itemFormModel.required(),
  shield: itemFormModel,
  inventory: yup.array(itemFormModel),
});

export interface HeroInventoryFormModel
  extends yup.InferType<typeof heroInventoryFormModel> {}

export const heroHistoryFormModel = yup.object().shape({
  backstory: yup.string(),
  morality: yup.string(),
  quirks: yup.array(yup.string()),
  habits: yup.array(yup.string()),
  strengths: yup.array(yup.string()),
  weaknesses: yup.array(yup.string()),
});

export interface HeroHistoryFormModel
  extends yup.InferType<typeof heroHistoryFormModel> {}
