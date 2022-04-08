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
import {useAppState, useAppDispatch} from "../../../hooks";
import {
  heroInventoryFormModel,
  HeroInventoryFormModel,
} from "../../../models/hero";
import {Item} from "../../../models/item";
import {setNewHeroInventory} from "../../../slices/heroSlice";
import {HeroBuilderStackParamList} from "./hero-builder-stack";
import InventoryInput from "./inventory-input";

type Props = NativeStackScreenProps<HeroBuilderStackParamList, "inventory">;

const HeroInventory: FC<Props> = ({navigation}) => {
  const heroStore = useAppState("hero");
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {selectedHero} = heroStore;
  const onSubmit = (form: HeroInventoryFormModel) => {
    dispatch(setNewHeroInventory(form));
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
        <Heading mt="8">What do you carry?</Heading>
        <Formik
          initialValues={
            {
              money: selectedHero?.money ?? 0,
              primaryWeapon: selectedHero?.primaryMastery as Item,
              secondaryWeapon: selectedHero?.secondaryWeapon as Item,
              armor:
                (selectedHero?.armor.length ?? 0) > 0
                  ? (selectedHero?.armor[0] as Item)
                  : undefined,
              shield:
                (selectedHero?.armor.length ?? 0) > 1
                  ? (selectedHero?.armor[1] as Item)
                  : undefined,
              inventory: selectedHero?.inventory as Item[],
            } as HeroInventoryFormModel
          }
          validationSchema={heroInventoryFormModel}
          onSubmit={onSubmit}>
          {({
            values,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const updateItem = (
              item: Item,
              equipped: boolean,
              itemKey: string,
            ) => {
              handleChange(`${itemKey}.name`)(item.name);
              handleChange(`${itemKey}.armor`)(`${item.armor}`);
              handleChange(`${itemKey}.damage`)(`${item.damage}`);
              handleChange(`${itemKey}.equipped`)(`${equipped}`);
              handleChange(`${itemKey}.rating`)(`${item.rating}`);
              handleChange(`${itemKey}.description`)(item.description);
            };
            return (
              <VStack width="90%" mx="3" maxW="300px">
                <FormControl>
                  <FormControl.Label
                    _text={{
                      bold: true,
                    }}>
                    Money
                  </FormControl.Label>
                  <Input
                    onBlur={handleBlur("money")}
                    onChangeText={handleChange("money")}
                    value={values.money}
                  />
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: "xs",
                    }}>
                    {errors.money}
                  </FormControl.ErrorMessage>
                </FormControl>
                <InventoryInput
                  label="Primary Weapon"
                  item={values.primaryWeapon}
                  setItem={(item?: Item) => {
                    if (item) {
                      updateItem(item, true, "primaryWeapon");
                    }
                  }}
                />
                <InventoryInput
                  label="Secondary Weapon"
                  item={values.secondaryWeapon}
                  setItem={(item?: Item) => {
                    if (item) {
                      updateItem(item, true, "secondaryWeapon");
                    }
                  }}
                />
                <InventoryInput
                  label="Armor"
                  item={values.armor}
                  setItem={(item?: Item) => {
                    if (item) {
                      updateItem(item, true, "armor");
                    }
                  }}
                />
                <InventoryInput
                  label="Shield"
                  item={values.shield ?? undefined}
                  setItem={(item?: Item) => {
                    if (item) {
                      updateItem(item, true, "shield");
                    }
                  }}
                />

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

export default HeroInventory;
