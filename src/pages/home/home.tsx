import {Layout, Text} from "@ui-kitten/components";
import React from "react";
import {pageStyles} from "../../styles/page";

const Home = () => {
  return (
    <Layout style={pageStyles.container}>
      <Text category="h2" style={pageStyles.heading}>
        Home Screen
      </Text>
      <Text style={pageStyles.paragraph}>
        Here is where you can find updates that have been released. Happy
        gaming!
      </Text>
    </Layout>
  );
};

export default Home;
