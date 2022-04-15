// import {Formik} from "formik";
// import React, {FC} from "react";
// import RatingRadioGroup from "../../../components/rating-radio-group";
// import {AffinityStat} from "../../../models/affinity";
// import {Item, itemFormModel, ItemFormModel} from "../../../models/item";
// import {RATING} from "../../../models/rating";

// type Props = {
//   item: Item;
//   setItem: (item: Item) => void;
//   close: () => void;
// };

// const ItemModal: FC<Props> = ({item, setItem, close}) => {
//   const onSubmit = (values: ItemFormModel) => {
//     setItem({
//       ...values,
//       affinityStats: (values.affinityStats ?? []) as AffinityStat[],
//       rating: values.rating as RATING,
//     });
//     close();
//   };
//   return (
//     <Formik
//       initialValues={
//         {
//           name: item.name,
//           description: item.description,
//           affinityStats: item.affinityStats,
//         } as ItemFormModel
//       }
//       validationSchema={itemFormModel}
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
//             <Modal.Header>Item</Modal.Header>
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
//                     Rating
//                   </FormControl.Label>
//                   <RatingRadioGroup
//                     name="rating"
//                     rating={values.rating}
//                     handleChange={handleChange("rating")}
//                   />
//                   <FormControl.ErrorMessage
//                     _text={{
//                       fontSize: "xs",
//                     }}>
//                     {errors.rating}
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

// export default ItemModal;
