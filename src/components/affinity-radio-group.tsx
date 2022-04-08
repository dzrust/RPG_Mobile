import {Radio, Stack} from "native-base";
import React, {FC} from "react";
import {AFFINITY} from "../models/affinity";

type Props = {
  label?: string;
  name: string;
  affinity: string;
  handleChange: (itemValue: string) => void;
};

const AffinityRadioGroup: FC<Props> = ({
  label = "Affinity",
  name,
  affinity,
  handleChange,
}) => {
  return (
    <Radio.Group
      name={name}
      defaultValue={affinity}
      accessibilityLabel={label}
      onChange={handleChange}>
      <Stack
        direction={{
          base: "row",
          md: "row",
        }}
        alignItems="center"
        space={4}
        w="75%"
        maxW="300px">
        <Radio value={AFFINITY.POTENCY} colorScheme="red" size="md" my={1}>
          Potency
        </Radio>
        <Radio value={AFFINITY.FINESSE} colorScheme="red" size="md" my={1}>
          Finesse
        </Radio>
        <Radio value={AFFINITY.VIGOR} colorScheme="red" size="md" my={1}>
          Vigor
        </Radio>
      </Stack>
    </Radio.Group>
  );
};

export default AffinityRadioGroup;
