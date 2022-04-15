import {Layout, Text} from "@ui-kitten/components";
import React from "react";
import {pageStyles} from "../../styles/page";

const Legends = () => {
  return (
    <Layout style={pageStyles.container}>
      <Text category="h2" style={pageStyles.heading}>
        Legends Screen
      </Text>
    </Layout>
  );
};

export default Legends;
