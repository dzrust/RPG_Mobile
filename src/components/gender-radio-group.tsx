import {Layout, Radio, RadioGroup, Text} from "@ui-kitten/components";
import React, {FC} from "react";
import {GENDER} from "../models/hero";
import {linearRadioGroupStyles} from "../styles/linear-radio-group";
import {pageStyles} from "../styles/page";

type Props = {
  label?: string;
  gender: string;
  handleChange: (itemValue: string) => void;
};

const GenderRadioGroup: FC<Props> = ({
  label = "Gender",
  gender,
  handleChange,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    switch (gender) {
      case GENDER.MALE:
        return 1;
      case GENDER.FEMALE:
        return 2;
      default:
        return 0;
    }
  });
  const onUpdate = (index: number) => {
    setSelectedIndex(index);
    switch (index) {
      case 1:
        handleChange(GENDER.MALE);
        break;
      case 2:
        handleChange(GENDER.FEMALE);
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
          <Radio style={linearRadioGroupStyles.radio}>Male</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Female</Radio>
        </RadioGroup>
      </Layout>
    </React.Fragment>
  );
};

export default GenderRadioGroup;
