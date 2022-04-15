import {Layout, Radio, RadioGroup, Text} from "@ui-kitten/components";
import React, {FC} from "react";
import {RATING} from "../models/rating";
import {linearRadioGroupStyles} from "../styles/linear-radio-group";
import {pageStyles} from "../styles/page";

type Props = {
  label?: string;
  rating: string;
  handleChange: (newRating: string) => void;
};

const RatingRadioGroup: FC<Props> = ({
  label = "Rating",
  rating,
  handleChange,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    switch (rating) {
      case RATING.COMMON:
        return 1;
      case RATING.UNCOMMON:
        return 2;
      case RATING.RARE:
        return 3;
      case RATING.LEGENDARY:
        return 4;
      default:
        return 0;
    }
  });
  const onUpdate = (index: number) => {
    setSelectedIndex(index);
    switch (index) {
      case 1:
        handleChange(RATING.COMMON);
        break;
      case 2:
        handleChange(RATING.UNCOMMON);
        break;
      case 3:
        handleChange(RATING.RARE);
        break;
      case 4:
        handleChange(RATING.LEGENDARY);
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
          <Radio style={linearRadioGroupStyles.radio}>Common</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Uncommon</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Rare</Radio>
          <Radio style={linearRadioGroupStyles.radio}>Legendary</Radio>
        </RadioGroup>
      </Layout>
    </React.Fragment>
  );
};

export default RatingRadioGroup;
