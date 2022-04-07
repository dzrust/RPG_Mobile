import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ErrorMessage, Formik} from "formik";
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  useTheme,
  VStack,
} from "native-base";
import React, {FC} from "react";
import {Hero, heroJobFormModel, HeroJobFormModel} from "../../../models/hero";
import {Level} from "../../../models/level";
import {HeroBuilderStackParamList} from "./hero-builder-stack";

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "job">;

const HeroJob: FC<Props> = ({navigation, route}) => {
  const {colors} = useTheme();
  const {hero} = route.params;
  const onSubmit = ({heroClass, level, job, experience}: HeroJobFormModel) => {
    const updatedHero: Hero = {
      ...hero,
      heroClass,
      level: level as Level,
      job,
      experience: experience ?? 0,
    };
    if (hero.level < 5) {
      hero.job = undefined;
    }
    console.log(updatedHero);
  };
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%">
      <Heading>What do you do?</Heading>
      <Formik
        initialValues={
          {
            heroClass: hero.heroClass,
            level: parseInt(`${hero.level}`, 10),
            job: hero.job,
            experience: parseInt(`${hero.experience}`, 10),
          } as HeroJobFormModel
        }
        validationSchema={heroJobFormModel}
        onSubmit={onSubmit}>
        {({values, isSubmitting, handleBlur, handleChange, handleSubmit}) => (
          <VStack width="90%" mx="3" maxW="300px">
            <FormControl isRequired>
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
              <ErrorMessage
                name="heroClass"
                component={FormControl.ErrorMessage}
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Level
              </FormControl.Label>
              <Input
                onBlur={handleBlur("level")}
                onChangeText={handleChange("level")}
                value={`${values.level}`}
                keyboardType="numeric"
              />
              <ErrorMessage name="level" component={FormControl.ErrorMessage} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Job
              </FormControl.Label>
              <Input
                onBlur={handleBlur("job")}
                onChangeText={handleChange("job")}
                value={values.job}
              />
              <ErrorMessage name="job" component={FormControl.ErrorMessage} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Experience
              </FormControl.Label>
              <Input
                onBlur={handleBlur("experience")}
                onChangeText={handleChange("experience")}
                value={`${values.experience}`}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="experience"
                component={FormControl.ErrorMessage}
              />
            </FormControl>
            <HStack>
              <Button
                onPress={() => navigation.goBack()}
                mt="5"
                width="50%"
                size="lg"
                colorScheme="danger"
                disabled={isSubmitting}>
                Cancel
              </Button>
              <Button
                onPress={handleSubmit}
                mt="5"
                width="50%"
                size="lg"
                colorScheme="primary"
                disabled={isSubmitting}>
                Next
              </Button>
            </HStack>
          </VStack>
        )}
      </Formik>
    </Box>
  );
};

export default HeroJob;
