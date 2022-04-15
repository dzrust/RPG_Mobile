import {Layout, Radio, RadioGroup, Text} from "@ui-kitten/components";
import React, {FC} from "react";
import {ELEMENT} from "../models/element";
import {linearRadioGroupStyles} from "../styles/linear-radio-group";
import {pageStyles} from "../styles/page";

type Props = {
  label?: string;
  name: string;
  element: string;
  handleChange: (itemValue: string) => void;
};

const ElementRadioGroup: FC<Props> = ({
  label = "Element",
  element,
  handleChange,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    switch (element) {
      case ELEMENT.FIRE:
        return 1;
      case ELEMENT.ICE:
        return 2;
      case ELEMENT.LIGHT:
        return 3;
      case ELEMENT.PHYSICAL:
        return 4;
      case ELEMENT.POISON:
        return 5;
      case ELEMENT.SHADOW:
        return 6;
      case ELEMENT.THUNDER:
        return 7;
      case ELEMENT.TIME:
        return 8;
      default:
        return 0;
    }
  });
  const onUpdate = (index: number) => {
    setSelectedIndex(index);
    switch (index) {
      case 1:
        handleChange(ELEMENT.FIRE);
        break;
      case 2:
        handleChange(ELEMENT.ICE);
        break;
      case 3:
        handleChange(ELEMENT.LIGHT);
        break;
      case 4:
        handleChange(ELEMENT.PHYSICAL);
        break;
      case 5:
        handleChange(ELEMENT.POISON);
        break;
      case 6:
        handleChange(ELEMENT.SHADOW);
        break;
      case 7:
        handleChange(ELEMENT.THUNDER);
        break;
      case 7:
        handleChange(ELEMENT.TIME);
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
          <Radio style={linearRadioGroupStyles.radio}>Fire</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Ice</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Light</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Physical</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Poison</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Shadow</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Thunder</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Time</Radio>
        </RadioGroup>
      </Layout>
    </React.Fragment>
  );
};

export default ElementRadioGroup;
