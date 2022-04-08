import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AFFINITY} from "../models/affinity";
import {
  createHero,
  Hero,
  HeroHistoryFormModel,
  HeroIntroFormModel,
  HeroInventoryFormModel,
  HeroJobFormModel,
  HeroSkillFormModel,
} from "../models/hero";
import {Item} from "../models/item";
import {getLevelFromExperience, Level} from "../models/level";
import {Mastery} from "../models/mastery";

// Define a type for the slice state
interface HeroState {
  selectedHero?: Hero;
  heroes: Hero[];
}

// Define the initial state using that type
const initialState: HeroState = {
  heroes: [],
};

export const heroSlice = createSlice({
  name: "hero",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createNewHero: state => {
      state.selectedHero = createHero();
    },
    selectHero: (state, action: PayloadAction<Hero>) => {
      state.selectedHero = action.payload;
    },
    setNewHeroIntro: (state, action: PayloadAction<HeroIntroFormModel>) => {
      const {name, race, gender, affinity, secondaryAffinity} = action.payload;
      const updatedHero: Hero = {
        ...(state.selectedHero ?? createHero()),
        name,
        race,
        gender,
        affinity: affinity as AFFINITY,
      };
      if (updatedHero.id.length === 0) {
        switch (secondaryAffinity) {
          case AFFINITY.FINESSE:
            updatedHero.finesse++;
            break;
          case AFFINITY.VIGOR:
            updatedHero.vigor++;
            break;
          case AFFINITY.POTENCY:
            updatedHero.potency++;
            break;
        }
        switch (affinity) {
          case AFFINITY.FINESSE:
            updatedHero.finesse = 3;
            break;
          case AFFINITY.VIGOR:
            updatedHero.vigor = 3;
            break;
          case AFFINITY.POTENCY:
            updatedHero.potency = 3;
            break;
        }
      }
      state.selectedHero = updatedHero;
    },
    setNewHeroJob: (state, action: PayloadAction<HeroJobFormModel>) => {
      const {heroClass, job, experience} = action.payload;
      const updatedHero: Hero = {
        ...(state.selectedHero ?? createHero()),
        heroClass,
        job,
        level: getLevelFromExperience(experience ?? 0) as Level,
        experience: experience ?? 0,
      };
      state.selectedHero = updatedHero;
    },
    setNewHeroSkill: (state, action: PayloadAction<HeroSkillFormModel>) => {
      const {
        hp,
        potency,
        finesse,
        vigor,
        primaryMastery,
        secondaryMastery,
        innateMastery1,
        innateMastery2,
      } = action.payload;
      const updatedHero: Hero = {
        ...(state.selectedHero ?? createHero()),
        totalHealth: hp,
        currentHealth: hp,
        potency,
        finesse,
        vigor,
        primaryMastery,
        secondaryMastery,
        innateMastery1,
        innateMastery2,
        masteries: {
          mastery1: action.payload.mastery1 as Mastery,
          mastery2: action.payload.mastery2 as Mastery,
          mastery3: action.payload.mastery3 as Mastery,
          mastery4: action.payload.mastery4 as Mastery,
          mastery5: action.payload.mastery5 as Mastery,
          mastery6: action.payload.mastery6 as Mastery,
          mastery7: action.payload.mastery7 as Mastery,
          mastery8: action.payload.mastery8 as Mastery,
          mastery9: action.payload.mastery9 as Mastery,
          mastery10: action.payload.mastery10 as Mastery,
        },
      };
      state.selectedHero = updatedHero;
    },
    setNewHeroInventory: (
      state,
      action: PayloadAction<HeroInventoryFormModel>,
    ) => {
      const {primaryWeapon, secondaryWeapon, money, armor, shield, inventory} =
        action.payload;
      const updatedHero: Hero = {
        ...(state.selectedHero ?? createHero()),
        primaryWeapon,
        secondaryWeapon,
        money,
        armor: [armor, shield],
        inventory: inventory as Item[],
      };
      state.selectedHero = updatedHero;
    },
    setNewHeroHistory: (state, action: PayloadAction<HeroHistoryFormModel>) => {
      const {backstory, morality, quirks, habits, strengths, weaknesses} =
        action.payload;
      const updatedHero: Hero = {
        ...(state.selectedHero ?? createHero()),
        backstory: backstory ?? "",
        morality: morality ?? "",
        quirks: (quirks ?? [])
          .map(quirk => quirk ?? "")
          .filter(quirk => (quirk ?? "").length > 0),
        habits: (habits ?? [])
          .map(habit => habit ?? "")
          .filter(habit => (habit ?? "").length > 0),
        strengths: (strengths ?? [])
          .map(strength => strength ?? "")
          .filter(strength => (strength ?? "").length > 0),
        weaknesses: (weaknesses ?? [])
          .map(weakness => weakness ?? "")
          .filter(weakness => (weakness ?? "").length > 0),
      };
      state.selectedHero = updatedHero;
    },
  },
});

export const {
  createNewHero,
  selectHero,
  setNewHeroIntro,
  setNewHeroJob,
  setNewHeroSkill,
  setNewHeroInventory,
  setNewHeroHistory,
} = heroSlice.actions;

export default heroSlice.reducer;
