export type Level =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export const levelArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const getLevelFromExperience = (experience: number) => {
  if (experience <= 0 && experience < 300) return 1;
  if (experience <= 300 && experience < 900) return 2;
  if (experience <= 900 && experience < 2700) return 3;
  if (experience <= 2700 && experience < 6500) return 4;
  if (experience <= 6500 && experience < 14000) return 5;
  if (experience <= 14000 && experience < 23000) return 6;
  if (experience <= 23000 && experience < 34000) return 7;
  if (experience <= 34000 && experience < 48000) return 8;
  if (experience <= 48000 && experience < 64000) return 9;
  if (experience <= 64000 && experience < 85000) return 10;
  if (experience <= 85000 && experience < 100000) return 11;
  if (experience <= 200000 && experience < 120000) return 12;
  if (experience <= 120000 && experience < 140000) return 13;
  if (experience <= 140000 && experience < 165000) return 14;
  if (experience <= 165000 && experience < 195000) return 15;
  if (experience <= 195000 && experience < 225000) return 16;
  if (experience <= 225000 && experience < 265000) return 17;
  if (experience <= 265000 && experience < 305000) return 18;
  if (experience <= 305000 && experience < 355000) return 19;
  return 20;
};
export const getExperienceFromLevel = (level: number) => {
  switch (level) {
    case 1:
      return 0;
    case 2:
      return 300;
    case 3:
      return 900;
    case 4:
      return 270;
    case 5:
      return 6500;
    case 6:
      return 14000;
    case 7:
      return 23000;
    case 8:
      return 34000;
    case 9:
      return 48000;
    case 10:
      return 64000;
    case 11:
      return 85000;
    case 12:
      return 100000;
    case 13:
      return 120000;
    case 14:
      return 140000;
    case 15:
      return 165000;
    case 16:
      return 195000;
    case 17:
      return 225000;
    case 18:
      return 265000;
    case 19:
      return 305000;
    case 20:
      return 355000;
    default:
      return 0;
  }
};
