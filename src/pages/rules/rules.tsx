import {Layout, Text} from "@ui-kitten/components";
import React from "react";
import {pageStyles} from "../../styles/page";

const Rules = () => {
  return (
    <Layout style={pageStyles.container}>
      <Text category="h2" style={pageStyles.heading}>
        Rules Screen
      </Text>
    </Layout>
  );
};

export default Rules;
