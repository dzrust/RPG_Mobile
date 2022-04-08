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
  useTheme,
  VStack,
} from "native-base";
import React, {FC} from "react";
import AffinityRadioGroup from "../../../components/affinity-radio-group";
import GenderRadioGroup from "../../../components/gender-radio-group";
import {useAppDispatch, useAppState} from "../../../hooks";
import {HeroIntroFormModel, heroIntroFormModel} from "../../../models/hero";
import {setNewHeroIntro} from "../../../slices/heroSlice";
import {HeroBuilderStackParamList} from "./hero-builder-stack";

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "intro">;

const HeroIntro: FC<Props> = ({navigation}) => {
  const heroStore = useAppState("hero");
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {selectedHero} = heroStore;
  const onSubmit = (form: HeroIntroFormModel) => {
    dispatch(setNewHeroIntro(form));
    navigation.navigate("job");
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
        <Heading mt="8">Who are you?</Heading>
        <Formik
          initialValues={
            {
              name: selectedHero?.name,
              race: selectedHero?.race,
              gender: selectedHero?.gender,
              affinity: selectedHero?.affinity,
              secondaryAffinity: selectedHero?.affinity,
            } as HeroIntroFormModel
          }
          validationSchema={heroIntroFormModel}
          onSubmit={onSubmit}>
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <VStack width="90%" mx="3" maxW="300px">
              <FormControl isInvalid={!!errors.name && !!touched.name}>
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
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                  }}>
                  {errors.name}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.race && !!touched.race}>
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
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                  }}>
                  {errors.race}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.gender && !!touched.gender}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}>
                  Gender
                </FormControl.Label>
                <GenderRadioGroup
                  name="gender"
                  gender={values.gender}
                  handleChange={handleChange("gender")}
                />
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                  }}>
                  {errors.gender}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.affinity}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}>
                  Affinity
                </FormControl.Label>
                <AffinityRadioGroup
                  name="affinity"
                  affinity={values.affinity}
                  handleChange={handleChange("affinity")}
                />
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                  }}>
                  {errors.affinity}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.secondaryAffinity}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}>
                  Extra Affinity Stat
                </FormControl.Label>
                <AffinityRadioGroup
                  name="secondaryAffinity"
                  label="Extra Affinity Stat"
                  affinity={values.secondaryAffinity}
                  handleChange={handleChange("secondaryAffinity")}
                />
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: "xs",
                  }}>
                  {errors.secondaryAffinity}
                </FormControl.ErrorMessage>
              </FormControl>

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
          )}
        </Formik>
      </Box>
    </ScrollView>
  );
};

export default HeroIntro;
