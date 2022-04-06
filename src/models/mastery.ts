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
  bonus?: string;
  description: string;
};
