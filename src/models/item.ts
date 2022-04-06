import {RATING} from "./rating";

export type Item = {
  name: string;
  equiped?: boolean;
  rating?: RATING;
  bonus?: string;
  damage?: string;
  armor?: string;
  description: string;
};
