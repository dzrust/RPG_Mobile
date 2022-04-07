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
import AffinitySelect from "../../../components/affinity-select";
import {AFFINITY} from "../../../models/affinity";
import {
  Hero,
  HeroIntroFormModel,
  heroIntroFormModel,
} from "../../../models/hero";
import {HeroBuilderStackParamList} from "./hero-builder-stack";

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "intro">;

const HeroIntro: FC<Props> = ({navigation, route}) => {
  const {colors} = useTheme();
  const {hero} = route.params;
  const onSubmit = ({
    name,
    race,
    gender,
    affinity,
    secondaryAffinity,
  }: HeroIntroFormModel) => {
    const updatedHero: Hero = {
      ...hero,
      name,
      race,
      gender,
      affinity: affinity as AFFINITY,
    };
    if (hero.id.length === 0) {
      switch (secondaryAffinity) {
        case AFFINITY.FINESSE:
          hero.finesse++;
          break;
        case AFFINITY.VIGOR:
          hero.vigor++;
          break;
        case AFFINITY.POTENCY:
          hero.potency++;
          break;
      }
      switch (affinity) {
        case AFFINITY.FINESSE:
          hero.finesse = 3;
          break;
        case AFFINITY.VIGOR:
          hero.vigor = 3;
          break;
        case AFFINITY.POTENCY:
          hero.potency = 3;
          break;
      }
    }
    navigation.navigate("job", {hero: updatedHero});
  };
  return (
    <Box
      flex={1}
      bg={colors.primary[100]}
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%">
      <Heading>Who are you?</Heading>
      <Formik
        initialValues={
          {
            name: hero.name,
            race: hero.race,
            gender: hero.gender,
            affinity: hero.affinity,
            secondaryAffinity: hero.affinity,
          } as HeroIntroFormModel
        }
        validationSchema={heroIntroFormModel}
        onSubmit={onSubmit}>
        {({values, isSubmitting, handleBlur, handleChange, handleSubmit}) => (
          <VStack width="90%" mx="3" maxW="300px">
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Name
              </FormControl.Label>
              <Input
                onBlur={handleBlur("name")}
                onChangeText={handleChange("name")}
                value={values.name}
              />
              <ErrorMessage name="name" component={FormControl.ErrorMessage} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Race
              </FormControl.Label>
              <Input
                onBlur={handleBlur("race")}
                onChangeText={handleChange("race")}
                value={values.race}
              />
              <ErrorMessage name="race" component={FormControl.ErrorMessage} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Gender
              </FormControl.Label>
              <Input
                onBlur={handleBlur("gender")}
                onChangeText={handleChange("gender")}
                value={values.gender}
              />
              <ErrorMessage
                name="gender"
                component={FormControl.ErrorMessage}
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Affinity
              </FormControl.Label>
              <AffinitySelect
                affinity={values.affinity}
                handleChange={handleChange("affinity")}
                handleBlur={handleBlur("affinity")}
              />
              <ErrorMessage
                name="affinity"
                component={FormControl.ErrorMessage}
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}>
                Extra Affinity Stat
              </FormControl.Label>
              <AffinitySelect
                label="Extra Affinity Stat"
                affinity={values.secondaryAffinity}
                handleChange={handleChange("secondaryAffinity")}
                handleBlur={handleBlur("secondaryAffinity")}
              />
              <ErrorMessage
                name="secondaryAffinity"
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

export default HeroIntro;
