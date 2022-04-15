import {Input, InputProps, Layout, Text} from "@ui-kitten/components";
import React, {FC} from "react";
import {NativeSyntheticEvent, TextInputFocusEventData} from "react-native";
import {pageStyles} from "../styles/page";

type Props = {
  label: string;
  value?: string;
  inputProps?: InputProps;
  error?: string;
  isInvalid: boolean;
  handleChange: (itemValue: string) => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

const FormControl: FC<Props> = ({
  label,
  value,
  inputProps = {},
  error,
  isInvalid,
  handleChange,
  handleBlur,
}) => {
  return (
    <Layout style={pageStyles.formControl}>
      <Text category="h6" style={pageStyles.paragraph}>
        {label}
      </Text>
      <Input
        value={value}
        onChangeText={handleChange}
        onBlur={handleBlur}
        {...inputProps}
      />
      {isInvalid ? (
        <Text category="h6" style={pageStyles.formControlError}>
          {error}
        </Text>
      ) : null}
    </Layout>
  );
};

export default FormControl;
