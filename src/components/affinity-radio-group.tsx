import {Layout, Radio, RadioGroup, Text} from "@ui-kitten/components";
import React, {FC} from "react";
import {AFFINITY} from "../models/affinity";
import {linearRadioGroupStyles} from "../styles/linear-radio-group";
import {pageStyles} from "../styles/page";

type Props = {
  label?: string;

  affinity: string;
  handleChange: (itemValue: string) => void;
};

const AffinityRadioGroup: FC<Props> = ({
  label = "Affinity",
  affinity,
  handleChange,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    switch (affinity) {
      case AFFINITY.POTENCY:
        return 1;
      case AFFINITY.FINESSE:
        return 2;
      case AFFINITY.VIGOR:
        return 3;
      default:
        return 0;
    }
  });
  const onUpdate = (index: number) => {
    setSelectedIndex(index);
    switch (index) {
      case 1:
        handleChange(AFFINITY.POTENCY);
        break;
      case 2:
        handleChange(AFFINITY.FINESSE);
        break;
      case 3:
        handleChange(AFFINITY.VIGOR);
        break;
    }
  };
  return (
    <React.Fragment>
      <Text category="h6" style={pageStyles.paragraph}>
        {label}
      </Text>
      <Layout style={linearRadioGroupStyles.container} level="1">
        <RadioGroup selectedIndex={selectedIndex} onChange={onUpdate}>
          <Radio style={linearRadioGroupStyles.radio}>Potency</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Finesse</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Vigor</Radio>
        </RadioGroup>
      </Layout>
    </React.Fragment>
  );
};

export default AffinityRadioGroup;
