import {faCirclePlus} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {Box, Button, HStack, Icon, Text, useTheme} from "native-base";
import React, {FC, useState} from "react";
import {createItem, Item} from "../../../models/item";
import ItemModal from "./item-model";

type Props = {
  label: string;
  item?: Item;
  setItem: (item?: Item) => void;
};

const InventoryInput: FC<Props> = ({label, item, setItem}) => {
  const {colors} = useTheme();
  const [itemToUpdate, setToUpdateItem] = useState<Item | undefined>(
    () => undefined,
  );
  const updateItem = (newItem: Item) => {
    setToUpdateItem(newItem);
    setItem(newItem);
  };
  const close = () => {
    setToUpdateItem(undefined);
  };
  return (
    <>
      <Box mt="4" mb="4">
        <HStack justifyContent="space-between">
          <Text>{label}: </Text>
          <Text>{item?.name}</Text>
          <Button
            backgroundColor={colors.primary[100]}
            onPress={() => {
              setToUpdateItem(item ?? createItem());
            }}>
            <Icon
              as={
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  size={20}
                  color={colors.primary[900]}
                />
              }
            />
          </Button>
        </HStack>
      </Box>
      {itemToUpdate ? (
        <ItemModal
          item={item ?? createItem()}
          setItem={updateItem}
          close={close}
        />
      ) : null}
    </>
  );
};

export default InventoryInput;
