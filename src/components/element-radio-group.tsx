import {Radio} from "native-base";
import React, {FC} from "react";
import {ELEMENT} from "../models/element";

type Props = {
  label?: string;
  name: string;
  element: string;
  handleChange: (itemValue: string) => void;
};

const ElementRadioGroup: FC<Props> = ({
  label = "Element",
  name,
  element: gender,
  handleChange,
}) => {
  return (
    <Radio.Group
      name={name}
      defaultValue={gender}
      accessibilityLabel={label}
      onChange={handleChange}>
      <Radio value={ELEMENT.FIRE} colorScheme="red" size="md" my={1}>
        Fire
      </Radio>
      <Radio value={ELEMENT.ICE} colorScheme="red" size="md" my={1}>
        Ice
      </Radio>
      <Radio value={ELEMENT.LIGHT} colorScheme="red" size="md" my={1}>
        Light
      </Radio>
      <Radio value={ELEMENT.PHYSICAL} colorScheme="red" size="md" my={1}>
        Physical
      </Radio>
      <Radio value={ELEMENT.POISON} colorScheme="red" size="md" my={1}>
        Poison
      </Radio>
      <Radio value={ELEMENT.SHADOW} colorScheme="red" size="md" my={1}>
        Shadow
      </Radio>
      <Radio value={ELEMENT.THUNDER} colorScheme="red" size="md" my={1}>
        Thunder
      </Radio>
      <Radio value={ELEMENT.TIME} colorScheme="red" size="md" my={1}>
        Time
      </Radio>
    </Radio.Group>
  );
};

export default ElementRadioGroup;
