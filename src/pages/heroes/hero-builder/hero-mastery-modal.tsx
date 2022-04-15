// import {Formik} from "formik";
// import React, {FC} from "react";
// import ElementRadioGroup from "../../../components/element-radio-group";
// import {AffinityStat} from "../../../models/affinity";
// import {ELEMENT} from "../../../models/element";
// import {
//   Mastery,
//   masteryFormModel,
//   MasteryFormModel,
// } from "../../../models/mastery";

// type Props = {
//   mastery: Mastery;
//   setMastery: (mastery: Mastery) => void;
//   close: () => void;
// };

// const HeroMasteryModal: FC<Props> = ({mastery, setMastery, close}) => {
//   const onSubmit = (values: MasteryFormModel) => {
//     setMastery({
//       ...values,
//       affinityStats: (values.affinityStats ?? []) as AffinityStat[],
//       element: values.element as ELEMENT,
//     });
//     close();
//   };
//   return (
//     <Formik
//       initialValues={
//         {
//           name: mastery.name,
//           description: mastery.description,
//           affinityStats: mastery.affinityStats,
//         } as MasteryFormModel
//       }
//       validationSchema={masteryFormModel}
//       onSubmit={onSubmit}>
//       {({
//         values,
//         errors,
//         isSubmitting,
//         handleBlur,
//         handleChange,
//         handleSubmit,
//       }) => (
//         <Modal isOpen>
//           <Modal.Content maxWidth="400px">
//             <Modal.CloseButton />
//             <Modal.Header>Mastery</Modal.Header>
//             <Modal.Body>
//               <VStack width="90%" mx="3" maxW="300px">
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Name
//                   </FormControl.Label>
//                   <Input
//                     onBlur={handleBlur("name")}
//                     onChangeText={handleChange("name")}
//                     value={values.name}
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.name}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Distance
//                   </FormControl.Label>
//                   <Input
//                     onBlur={handleBlur("distance")}
//                     onChangeText={handleChange("distance")}
//                     value={`${values.distance ?? ""}`}
//                     keyboardType="numeric"
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.distance}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Duration
//                   </FormControl.Label>
//                   <Input
//                     onBlur={handleBlur("duration")}
//                     onChangeText={handleChange("duration")}
//                     value={`${values.duration ?? ""}`}
//                     keyboardType="numeric"
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.duration}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Cooldown
//                   </FormControl.Label>
//                   <Input
//                     onBlur={handleBlur("cooldown")}
//                     onChangeText={handleChange("cooldown")}
//                     value={`${values.cooldown ?? ""}`}
//                     keyboardType="numeric"
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.cooldown}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Element
//                   </FormControl.Label>
//                   <ElementRadioGroup
//                     name="element"
//                     handleChange={handleChange("element")}
//                     element={values.element ?? ""}
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.cooldown}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Damage
//                   </FormControl.Label>
//                   <Input
//                     onBlur={handleBlur("damage")}
//                     onChangeText={handleChange("damage")}
//                     value={`${values.damage ?? ""}`}
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.damage}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Armor
//                   </FormControl.Label>
//                   <Input
//                     onBlur={handleBlur("armor")}
//                     onChangeText={handleChange("armor")}
//                     value={`${values.armor ?? ""}`}
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.armor}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label
//                     _text={{
//                       bold: true,
//                     }}>
//                     Description
//                   </FormControl.Label>
//                   <TextArea
//                     h="20"
//                     onBlur={handleBlur("description")}
//                     onChangeText={handleChange("description")}
//                     value={values.description}
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.description}
//                   </FormControl.ErrorMessage>
//                 </FormControl>
//               </VStack>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button.Group space={2}>
//                 <Button
//                   variant="ghost"
//                   colorScheme="secondary"
//                   onPress={close}
//                   isDisabled={isSubmitting}>
//                   Cancel
//                 </Button>
//                 <Button
//                   onPress={handleSubmit}
//                   colorScheme="primary"
//                   isDisabled={isSubmitting}>
//                   Save
//                 </Button>
//               </Button.Group>
//             </Modal.Footer>
//           </Modal.Content>
//         </Modal>
//       )}
//     </Formik>
//   );
// };

// export default HeroMasteryModal;
