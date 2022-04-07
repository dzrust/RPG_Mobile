import {Select} from "native-base";
import React, {FC} from "react";
import {AFFINITY} from "../models/affinity";

type Props = {
  label?: string;
  affinity: string;
  handleChange: (itemValue: string) => void;
  handleBlur: (e: any) => void;
};

const AffinitySelect: FC<Props> = ({
  label = "Affinity",
  affinity,
  handleChange,
  handleBlur,
}) => {
  return (
    <Select
      selectedValue={affinity}
      minWidth="200"
      accessibilityLabel={label}
      placeholder={label}
      onValueChange={handleChange}
      onClose={handleBlur}
      mt={1}>
      <Select.Item label="Potency" value={AFFINITY.POTENCY} />
      <Select.Item label="Finesse" value={AFFINITY.FINESSE} />
      <Select.Item label="Vigor" value={AFFINITY.VIGOR} />
    </Select>
  );
};

export default AffinitySelect;
