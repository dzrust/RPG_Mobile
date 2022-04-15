import React, {FC, useEffect, useState} from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import {COLLECTIONS} from "../../models/collections";
import {Hero} from "../../models/hero";
import {HeroStackParamList} from "./hero-stack";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button, Layout, Text} from "@ui-kitten/components";
import {pageStyles} from "../../styles/page";
import {FlatList} from "react-native";

type Props = NativeStackScreenProps<HeroStackParamList, "heroes">;

const Heroes: FC<Props> = ({navigation}) => {
  const currentUser = auth().currentUser;
  const [heroes, setHeroes] = useState<Hero[]>(() => []);
  useEffect(() => {
    if (!currentUser) {
      return;
    }
    firestore()
      .collection(COLLECTIONS.HEROES)
      .doc(currentUser?.uid)
      .get()
      .then(firestoreData => {
        if (firestoreData.exists) {
          setHeroes(firestoreData.data() as Hero[]);
        }
      });
  }, [currentUser]);
  return (
    <Layout style={pageStyles.container}>
      <Layout style={pageStyles.headingButtonContainer} level="1">
        <Text style={pageStyles.heading} category="h2">
          Heroes
        </Text>
        <Button
          onPress={() => {
            navigation.navigate("hero-builder");
          }}>
          Create Hero
        </Button>
      </Layout>
      <FlatList
        data={heroes}
        renderItem={({item}) => (
          <Layout>
            <Text style={pageStyles.paragraph}>{item.name}</Text>
            <Text style={pageStyles.subscript}>
              {item.race} ({item.affinity})
            </Text>
          </Layout>
        )}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
};

export default Heroes;
