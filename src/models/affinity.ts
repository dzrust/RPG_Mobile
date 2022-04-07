import * as yup from "yup";

export enum AFFINITY {
  POTENCY = "Potency",
  FINESSE = "Finesse",
  VIGOR = "Vigor",
}

export type AffinityStat = {
  affinity: AFFINITY;
  stat: number;
};

export const affinityStatFormModel = yup.object().shape({
  affinity: yup
    .string()
    .oneOf([AFFINITY.FINESSE, AFFINITY.POTENCY, AFFINITY.VIGOR])
    .required(),
  stat: yup.number().required(),
});

export interface AffinityStatFormModel
  extends yup.InferType<typeof affinityStatFormModel> {}
