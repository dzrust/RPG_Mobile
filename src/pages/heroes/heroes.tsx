import {
  Box,
  Fab,
  FlatList,
  Heading,
  HStack,
  Icon,
  Skeleton,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React, {FC, useEffect, useState} from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import {COLLECTIONS} from "../../models/collections";
import {Hero} from "../../models/hero";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faPlus} from "@fortawesome/pro-solid-svg-icons";
import {HeroStackParamList} from "./hero-stack";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<HeroStackParamList, "heroes">;

const Heroes: FC<Props> = ({navigation}) => {
  const currentUser = auth().currentUser;
  const [heroes, setHeroes] = useState<Hero[]>(() => []);
  const [isLoading, setIsLoading] = useState(() => false);
  const {colors} = useTheme();
  useEffect(() => {
    if (!currentUser) {
      return;
    }
    setIsLoading(true);
    firestore()
      .collection(COLLECTIONS.HEROES)
      .doc(currentUser?.uid)
      .get()
      .then(firestoreData => {
        if (firestoreData.exists) {
          setHeroes(firestoreData.data() as Hero[]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentUser]);
  return (
    <Box flex={1} bg={colors.primary[100]}>
      <Heading fontSize="xl" p="4" pb="3">
        Heroes
      </Heading>
      <Fab
        renderInPortal={false}
        shadow={2}
        placement="top-right"
        size="sm"
        icon={
          <Icon color="white" as={<FontAwesomeIcon icon={faPlus} />} size="4" />
        }
        label="Create Hero"
        onPress={() => {
          navigation.navigate("hero-builder");
        }}
      />
      <Skeleton isLoaded={!isLoading} bg={colors.primary[100]}>
        <FlatList
          bg={colors.primary[100]}
          data={heroes}
          renderItem={({item}) => (
            <Box
              bg={colors.primary[100]}
              borderBottomWidth="1"
              borderColor={colors.primary[800]}
              pl="4"
              pr="5"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text color={colors.black} bold>
                    {item.name}
                  </Text>
                  <Text color={colors.light[700]}>
                    {item.race} ({item.affinity})
                  </Text>
                </VStack>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </Skeleton>
    </Box>
  );
};

export default Heroes;
