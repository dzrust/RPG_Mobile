// import {NativeStackScreenProps} from "@react-navigation/native-stack";
// import {Button, Divider, Layout, Text} from "@ui-kitten/components";
// import {Formik} from "formik";
// import React, {FC} from "react";
// import {ScrollView} from "react-native";
// import FormControl from "../../../components/form-control";
// import {useAppState, useAppDispatch} from "../../../hooks";
// import {
//   heroInventoryFormModel,
//   HeroInventoryFormModel,
// } from "../../../models/hero";
// import {Item} from "../../../models/item";
// import {setNewHeroInventory} from "../../../slices/heroSlice";
// import {pageStyles} from "../../../styles/page";
// import {HeroBuilderStackParamList} from "./hero-builder-stack";
// import InventoryInput from "./inventory-input";

// type Props = NativeStackScreenProps<HeroBuilderStackParamList, "inventory">;

// const HeroInventory: FC<Props> = ({navigation}) => {
//   const heroStore = useAppState("hero");
//   const dispatch = useAppDispatch();
//   const {selectedHero} = heroStore;
//   const onSubmit = (form: HeroInventoryFormModel) => {
//     dispatch(setNewHeroInventory(form));
//   };
//   return (
//     <ScrollView style={pageStyles.container}>
//       <Layout>
//         <Text style={pageStyles.heading} category="h2">
//           What do you carry?
//         </Text>
//         <Formik
//           initialValues={
//             {
//               money: selectedHero?.money ?? 0,
//               primaryWeapon: selectedHero?.primaryMastery as Item,
//               secondaryWeapon: selectedHero?.secondaryWeapon as Item,
//               armor:
//                 (selectedHero?.armor.length ?? 0) > 0
//                   ? (selectedHero?.armor[0] as Item)
//                   : undefined,
//               shield:
//                 (selectedHero?.armor.length ?? 0) > 1
//                   ? (selectedHero?.armor[1] as Item)
//                   : undefined,
//               inventory: selectedHero?.inventory as Item[],
//             } as HeroInventoryFormModel
//           }
//           validationSchema={heroInventoryFormModel}
//           onSubmit={onSubmit}>
//           {({
//             values,
//             errors,
//             touched,
//             isSubmitting,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//           }) => {
//             const updateItem = (
//               item: Item,
//               equipped: boolean,
//               itemKey: string,
//             ) => {
//               handleChange(`${itemKey}.name`)(item.name);
//               handleChange(`${itemKey}.armor`)(`${item.armor}`);
//               handleChange(`${itemKey}.damage`)(`${item.damage}`);
//               handleChange(`${itemKey}.equipped`)(`${equipped}`);
//               handleChange(`${itemKey}.rating`)(`${item.rating}`);
//               handleChange(`${itemKey}.description`)(item.description);
//             };
//             return (
//               <Layout>
//                 <FormControl
//                   label="Money"
//                   handleBlur={handleBlur("money")}
//                   handleChange={handleChange("money")}
//                   value={`${values.money}`}
//                   error={errors.money}
//                   isInvalid={!!errors.money && !!touched.money}
//                 />

//                 <InventoryInput
//                   label="Primary Weapon"
//                   item={values.primaryWeapon}
//                   setItem={(item?: Item) => {
//                     if (item) {
//                       updateItem(item, true, "primaryWeapon");
//                     }
//                   }}
//                 />
//                 <InventoryInput
//                   label="Secondary Weapon"
//                   item={values.secondaryWeapon}
//                   setItem={(item?: Item) => {
//                     if (item) {
//                       updateItem(item, true, "secondaryWeapon");
//                     }
//                   }}
//                 />
//                 <InventoryInput
//                   label="Armor"
//                   item={values.armor}
//                   setItem={(item?: Item) => {
//                     if (item) {
//                       updateItem(item, true, "armor");
//                     }
//                   }}
//                 />
//                 <InventoryInput
//                   label="Shield"
//                   item={values.shield ?? undefined}
//                   setItem={(item?: Item) => {
//                     if (item) {
//                       updateItem(item, true, "shield");
//                     }
//                   }}
//                 />

//                 <Button onPress={handleSubmit} disabled={isSubmitting}>
//                   Next
//                 </Button>
//                 <Divider style={pageStyles.divider} />
//                 <Button
//                   onPress={() => navigation.goBack()}
//                   disabled={isSubmitting}>
//                   Back
//                 </Button>
//               </Layout>
//             );
//           }}
//         </Formik>
//       </Layout>
//     </ScrollView>
//   );
// };

// export default HeroInventory;
