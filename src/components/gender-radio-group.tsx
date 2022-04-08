import {Radio, Stack} from "native-base";
import React, {FC} from "react";
import {GENDER} from "../models/hero";

type Props = {
  label?: string;
  name: string;
  gender: string;
  handleChange: (itemValue: string) => void;
};

const GenderRadioGroup: FC<Props> = ({
  label = "Gender",
  name,
  gender,
  handleChange,
}) => {
  return (
    <Radio.Group
      name={name}
      defaultValue={gender}
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
        <Radio value={GENDER.MALE} colorScheme="red" size="md" my={1}>
          Male
        </Radio>
        <Radio value={GENDER.FEMALE} colorScheme="red" size="md" my={1}>
          Female
        </Radio>
      </Stack>
    </Radio.Group>
  );
};

export default GenderRadioGroup;
