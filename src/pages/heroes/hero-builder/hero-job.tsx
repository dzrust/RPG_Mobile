import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Formik} from "formik";
import React, {FC} from "react";
import {useAppState, useAppDispatch} from "../../../hooks";
import {heroJobFormModel, HeroJobFormModel} from "../../../models/hero";
import {getExperienceFromLevel} from "../../../models/level";
import {setNewHeroJob} from "../../../slices/heroSlice";
import {pageStyles} from "../../../styles/page";
import {HeroBuilderStackParamList} from "./hero-builder-stack";

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "intro">;

const HeroJob: FC<Props> = ({navigation}) => {
  const heroStore = useAppState("hero");
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {selectedHero} = heroStore;
  const onSubmit = (form: HeroJobFormModel) => {
    dispatch(setNewHeroJob(form));
    navigation.navigate("skill");
  };
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
        <Heading mt="8">What do you do?</Heading>
        <Formik
          initialValues={
            {
              heroClass: selectedHero?.heroClass,
              job: selectedHero?.job,
              level: parseInt(`${selectedHero?.level}`, 10),
            } as HeroJobFormModel
          }
          validationSchema={heroJobFormModel}
          onSubmit={onSubmit}>
          {({
            values,
            errors,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <VStack width="90%" mx="3" maxW="300px">
              <FormControl>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}>
                  Class
                </FormControl.Label>
                <Input
                  onBlur={handleBlur("heroClass")}
                  onChangeText={handleChange("heroClass")}
                  value={values.heroClass}
                />
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                  }}>
                  {errors.heroClass}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}>
                  Level ({values.level})
                </FormControl.Label>
                <Slider
                  colorScheme="secondary"
                  minValue={1}
                  maxValue={20}
                  defaultValue={values.level}
                  onChange={(newLevel: number) =>
                    handleChange("level")(`${Math.floor(newLevel)}`)
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
                  {errors.level}
                </FormControl.ErrorMessage>
              </FormControl>
              <Text>
                Experience (
                {getExperienceFromLevel(parseInt(`${values.level}`, 10))})
              </Text>
              <FormControl isDisabled={values.level < 5}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}>
                  Job (Level 5+)
                </FormControl.Label>
                <Input
                  onBlur={handleBlur("job")}
                  onChangeText={handleChange("job")}
                  value={values.job}
                />
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                  }}>
                  {errors.job}
                </FormControl.ErrorMessage>
              </FormControl>
              <Button onPress={handleSubmit} disabled={isSubmitting}>
                Next
              </Button>
              <Divider style={pageStyles.divider} />
              <Button
                onPress={() => navigation.goBack()}
                disabled={isSubmitting}>
                Back
              </Button>
            </VStack>
          )}
        </Formik>
      </Box>
    </ScrollView>
  );
};

export default HeroJob;
