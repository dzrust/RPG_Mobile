import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Formik} from "formik";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Heading,
  Input,
  ScrollView,
  Slider,
  useTheme,
  VStack,
} from "native-base";
import React, {FC, useMemo} from "react";
import {useAppState, useAppDispatch} from "../../../hooks";
import {heroSkillFormModel, HeroSkillFormModel} from "../../../models/hero";
import {Mastery} from "../../../models/mastery";
import {setNewHeroSkill} from "../../../slices/heroSlice";
import {HeroBuilderStackParamList} from "./hero-builder-stack";
import HeroMasteryInput from "./mastery-input";

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "intro">;

const HeroSkill: FC<Props> = ({navigation}) => {
  const heroStore = useAppState("hero");
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {selectedHero} = heroStore;
  const onSubmit = (form: HeroSkillFormModel) => {
    dispatch(setNewHeroSkill(form));
    navigation.navigate("inventory");
  };
  const masteriesArray = useMemo(() => {
    const masteryArray: string[] = [];
    const numberOfMasteries = Math.trunc((selectedHero?.level ?? 1) / 2);
    for (let i = 0; i < numberOfMasteries; i++) {
      masteryArray.push(`mastery${i + 1}`);
    }
    return masteryArray;
  }, [selectedHero?.level]);
  return (
    <ScrollView bg={colors.primary[100]}>
      <Box
        flex={1}
        paddingLeft="8"
        paddingRight="8"
        justifyContent="center"
        alignContent="center"
        bg={colors.primary[100]}
        width="100%"
        height="100%">
        <Heading mt="8">What skill do you possesss?</Heading>
        <Formik
          initialValues={
            {
              hp: selectedHero?.totalHealth,
              potency: selectedHero?.potency,
              finesse: selectedHero?.finesse,
              vigor: selectedHero?.vigor,
              primaryMastery: selectedHero?.primaryMastery,
              secondaryMastery: selectedHero?.secondaryMastery,
              innateMastery1: selectedHero?.innateMastery1,
              innateMastery2: selectedHero?.innateMastery2,
            } as HeroSkillFormModel
          }
          validationSchema={heroSkillFormModel}
          onSubmit={onSubmit}>
          {({
            values,
            errors,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => {
            const updateMastery = (mastery: Mastery, masteryKey: string) => {
              handleChange(`${masteryKey}.name`)(mastery.name);
              handleChange(`${masteryKey}.distance`)(`${mastery.distance}`);
              handleChange(`${masteryKey}.cooldown`)(`${mastery.cooldown}`);
              handleChange(`${masteryKey}.duration`)(`${mastery.duration}`);
              handleChange(`${masteryKey}.element`)(`${mastery.element}`);
              handleChange(`${masteryKey}.damage`)(`${mastery.damage}`);
              handleChange(`${masteryKey}.armor`)(`${mastery.armor}`);
              handleChange(`${masteryKey}.description`)(mastery.description);
            };

            return (
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}>
                    Health Points
                  </FormControl.Label>
                  <Input
                    onBlur={handleBlur("hp")}
                    onChangeText={handleChange("hp")}
                    value={`${values.hp}`}
                    keyboardType="numeric"
                  />
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}>
                    {errors.hp}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}>
                    Potency: {values.potency}
                  </FormControl.Label>
                  <Slider
                    colorScheme="secondary"
                    minValue={1}
                    maxValue={20}
                    defaultValue={values.potency}
                    onChange={(newPotency: number) =>
                      handleChange("potency")(`${Math.floor(newPotency)}`)
                    }>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}>
                    {errors.potency}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}>
                    Finesse: {values.finesse}
                  </FormControl.Label>
                  <Slider
                    colorScheme="secondary"
                    minValue={1}
                    maxValue={20}
                    defaultValue={values.finesse}
                    onChange={(newFinesse: number) =>
                      handleChange("finesse")(`${Math.floor(newFinesse)}`)
                    }>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}>
                    {errors.finesse}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}>
                    Vigor: {values.vigor}
                  </FormControl.Label>
                  <Slider
                    colorScheme="secondary"
                    minValue={1}
                    maxValue={20}
                    defaultValue={values.vigor}
                    onChange={(newVigor: number) =>
                      handleChange("vigor")(`${Math.floor(newVigor)}`)
                    }>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}>
                    {errors.vigor}
                  </FormControl.ErrorMessage>
                </FormControl>
                <HeroMasteryInput
                  label="Primary Mastery"
                  mastery={values.primaryMastery}
                  setMastery={(primaryMastery?: Mastery) => {
                    if (primaryMastery) {
                      updateMastery(primaryMastery, "primaryMastery");
                    }
                  }}
                />
                <HeroMasteryInput
                  label="Secondary Mastery"
                  mastery={values.secondaryMastery}
                  setMastery={(secondaryMastery?: Mastery) => {
                    if (secondaryMastery) {
                      updateMastery(secondaryMastery, "secondaryMastery");
                    }
                  }}
                />
                <HeroMasteryInput
                  label="Innate Mastery 1"
                  mastery={values.innateMastery1}
                  setMastery={(innateMastery1?: Mastery) => {
                    if (innateMastery1) {
                      updateMastery(innateMastery1, "innateMastery1");
                    }
                  }}
                />
                <HeroMasteryInput
                  label="Innate Mastery 2"
                  mastery={values.innateMastery2}
                  setMastery={(innateMastery2?: Mastery) => {
                    if (innateMastery2) {
                      updateMastery(innateMastery2, "innateMastery2");
                    }
                  }}
                />
                {masteriesArray.map((mastery, index) => (
                  <HeroMasteryInput
                    key={mastery}
                    label={`Mastery ${index + 1}`}
                    mastery={values[mastery]}
                    setMastery={(updatedMastery?: Mastery) => {
                      if (updatedMastery) {
                        updateMastery(updatedMastery, mastery);
                      }
                    }}
                  />
                ))}

                <Button
                  onPress={handleSubmit}
                  mt="8"
                  width="full"
                  size="lg"
                  colorScheme="primary"
                  disabled={isSubmitting}>
                  Next
                </Button>
                <Divider
                  orientation="horizontal"
                  backgroundColor={colors.primary[600]}
                  thickness="1"
                  marginTop="8"
                  marginBottom="8"
                />
                <Button
                  onPress={() => navigation.goBack()}
                  width="full"
                  size="lg"
                  colorScheme="secondary"
                  disabled={isSubmitting}>
                  Back
                </Button>
              </VStack>
            );
          }}
        </Formik>
      </Box>
    </ScrollView>
  );
};

export default HeroSkill;
