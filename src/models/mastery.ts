import * as yup from "yup";
import {AffinityStat, affinityStatFormModel} from "./affinity";
import {ELEMENT} from "./element";
import {DistanceUnit, TimeUnit} from "./units";

export type Mastery = {
  name: string;
  distance?: DistanceUnit;
  duration?: TimeUnit;
  cooldown?: TimeUnit;
  element?: ELEMENT;
  damage?: string;
  armor?: string;
  affinityStats: AffinityStat[];
  description: string;
};

export const createMastery = (): Mastery => ({
  name: "",
  description: "",
  affinityStats: [],
});

export const masteryFormModel = yup.object().shape({
  name: yup.string().required(),
  distance: yup.mixed(),
  duration: yup.mixed(),
  cooldown: yup.mixed(),
  element: yup
    .string()
    .oneOf([
      ELEMENT.FIRE,
      ELEMENT.ICE,
      ELEMENT.LIGHT,
      ELEMENT.PHYSICAL,
      ELEMENT.POISON,
      ELEMENT.SHADOW,
      ELEMENT.THUNDER,
      ELEMENT.TIME,
    ]),
  damage: yup.string(),
  armor: yup.string(),
  affinityStats: yup.array(affinityStatFormModel),
  description: yup.string().required(),
});

export interface MasteryFormModel
  extends yup.InferType<typeof masteryFormModel> {}
