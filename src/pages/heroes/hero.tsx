import {Layout, Text} from "@ui-kitten/components";
import React from "react";
import {pageStyles} from "../../styles/page";

const Hero = () => {
  return (
    <Layout style={pageStyles.container}>
      <Text style={pageStyles.paragraph}>Hero Screen</Text>
    </Layout>
  );
};

export default Hero;
