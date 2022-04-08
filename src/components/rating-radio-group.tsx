import {Radio, Stack} from "native-base";
import React, {FC} from "react";
import {RATING} from "../models/rating";

type Props = {
  label?: string;
  name: string;
  rating: string;
  handleChange: (newRating: string) => void;
};

const RatingRadioGroup: FC<Props> = ({
  label = "Rating",
  name,
  rating,
  handleChange,
}) => {
  return (
    <Radio.Group
      name={name}
      defaultValue={rating}
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
        <Radio value={RATING.COMMON} colorScheme="red" size="md" my={1}>
          Common
        </Radio>
        <Radio value={RATING.UNCOMMON} colorScheme="red" size="md" my={1}>
          Uncommon
        </Radio>
        <Radio value={RATING.RARE} colorScheme="red" size="md" my={1}>
          Rare
        </Radio>
        <Radio value={RATING.LEGENDARY} colorScheme="red" size="md" my={1}>
          Legendary
        </Radio>
      </Stack>
    </Radio.Group>
  );
};

export default RatingRadioGroup;
