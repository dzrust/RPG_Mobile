import {faCirclePlus} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {Box, Button, HStack, Icon, Text, useTheme} from "native-base";
import React, {FC, useState} from "react";
import {createMastery, Mastery} from "../../../models/mastery";
import HeroMasteryModal from "./hero-mastery-modal";

type Props = {
  label: string;
  mastery?: Mastery;
  setMastery: (mastery?: Mastery) => void;
};

const HeroMasteryInput: FC<Props> = ({label, mastery, setMastery}) => {
  const {colors} = useTheme();
  const [masteryToUpdate, setToUpdateMastery] = useState<Mastery | undefined>(
    () => undefined,
  );
  const updateMastery = (newMastery: Mastery) => {
    setToUpdateMastery(newMastery);
    setMastery(newMastery);
  };
  const close = () => {
    setToUpdateMastery(undefined);
  };
  return (
    <>
      <Box mt="4" mb="4">
        <HStack justifyContent="space-between">
          <Text>{label}: </Text>
          <Text>{mastery?.name}</Text>
          <Button
            backgroundColor={colors.primary[100]}
            onPress={() => {
              setToUpdateMastery(mastery ?? createMastery());
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
      {masteryToUpdate ? (
        <HeroMasteryModal
          mastery={mastery ?? createMastery()}
          setMastery={updateMastery}
          close={close}
        />
      ) : null}
    </>
  );
};

export default HeroMasteryInput;
