import * as yup from "yup";
import {AffinityStat, affinityStatFormModel} from "./affinity";
import {RATING} from "./rating";

export type Item = {
  name: string;
  equipped?: boolean;
  rating: RATING;
  affinityStats: AffinityStat[];
  damage?: string;
  armor?: string;
  description: string;
};

export const itemFormModel = yup.object().shape({
  name: yup.string().required(),
  equipped: yup.bool(),
  rating: yup
    .string()
    .oneOf([RATING.COMMON, RATING.LEGENDARY, RATING.RARE, RATING.UNCOMMON])
    .required(),
  affinityStats: yup.array(affinityStatFormModel),
  damage: yup.string(),
  armor: yup.string(),
  description: yup.string().required(),
});

export interface ItemFormModel extends yup.InferType<typeof itemFormModel> {}
