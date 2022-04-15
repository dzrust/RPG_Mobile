import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button, Divider, Layout, Text} from "@ui-kitten/components";
import {Formik, useFormik} from "formik";
import React, {FC} from "react";
import {ScrollView} from "react-native";
import AffinityRadioGroup from "../../../components/affinity-radio-group";
import FormControl from "../../../components/form-control";
import GenderRadioGroup from "../../../components/gender-radio-group";
import {useAppDispatch, useAppState} from "../../../hooks";
import {HeroIntroFormModel, heroIntroFormModel} from "../../../models/hero";
import {setNewHeroIntro} from "../../../slices/heroSlice";
import {pageStyles} from "../../../styles/page";
import {HeroBuilderStackParamList} from "./hero-builder-stack";

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "intro">;

const HeroIntro: FC<Props> = ({navigation}) => {
  const heroStore = useAppState("hero");
  const dispatch = useAppDispatch();
  const {selectedHero} = heroStore;
  const onSubmit = (form: HeroIntroFormModel) => {
    dispatch(setNewHeroIntro(form));
    navigation.navigate("job");
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: selectedHero?.name,
      race: selectedHero?.race,
      gender: selectedHero?.gender,
      affinity: selectedHero?.affinity,
      secondaryAffinity: selectedHero?.affinity,
    } as HeroIntroFormModel,
    validationSchema: heroIntroFormModel,
    onSubmit,
  });
  return (
    <ScrollView style={pageStyles.background}>
      <Layout style={pageStyles.container}>
        <Text style={pageStyles.heading} category="h2">
          Who are you?
        </Text>
        <FormControl
          label="Name"
          handleBlur={handleBlur("name")}
          handleChange={handleChange("name")}
          isInvalid={!!errors.name && !!touched.name}
          value={values.name}
          error={errors.name}
        />
        <FormControl
          label="Race"
          handleBlur={handleBlur("race")}
          handleChange={handleChange("race")}
          isInvalid={!!errors.race && !!touched.race}
          value={values.race}
          error={errors.race}
        />

        <Layout style={pageStyles.formControl}>
          <Text style={pageStyles.paragraph}>Gender</Text>
          <GenderRadioGroup
            gender={values.gender}
            handleChange={handleChange("gender")}
          />
          {errors.gender ? (
            <Text style={pageStyles.formControlError}>{errors.gender}</Text>
          ) : null}
        </Layout>
        <Layout style={pageStyles.formControl}>
          <Text style={pageStyles.paragraph}>Affinity</Text>
          <AffinityRadioGroup
            affinity={values.affinity}
            handleChange={handleChange("affinity")}
          />
          {errors.affinity ? (
            <Text style={pageStyles.formControlError}>{errors.affinity}</Text>
          ) : null}
        </Layout>
        <Layout style={pageStyles.formControl}>
          <Text style={pageStyles.paragraph}>Extra Affinity Stat</Text>
          <AffinityRadioGroup
            affinity={values.secondaryAffinity}
            handleChange={handleChange("secondaryAffinity")}
          />
          {errors.secondaryAffinity ? (
            <Text style={pageStyles.formControlError}>{errors.affinity}</Text>
          ) : null}
        </Layout>

        <Button onPress={handleSubmit} disabled={isSubmitting}>
          Next
        </Button>
        <Divider style={pageStyles.divider} />
        <Button onPress={() => navigation.goBack()} disabled={isSubmitting}>
          Back
        </Button>
      </Layout>
    </ScrollView>
  );
};

export default HeroIntro;
