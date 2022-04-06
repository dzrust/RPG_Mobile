import {
  Alert,
  Box,
  Center,
  CloseIcon,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";
import React, {useState} from "react";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
GoogleSignin.configure({
  webClientId:
    "325778762264-56tgqdk9vm7ke0sdvr193cjhkeh6fiit.apps.googleusercontent.com",
});

const Unauthenticated = () => {
  const [error, setError] = useState(() => "");
  const [isSigningIn, setIsSiginingIn] = useState(() => false);
  const onSignIn = async () => {
    setIsSiginingIn(true);
    setError("");
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (err) {
      console.error(err);
      setError(`${err}`);
    } finally {
      setIsSiginingIn(false);
    }
  };
  return (
    <Center w="100%">
      {error.length > 0 ? (
        <Alert w="100%" status="error">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {error}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
              />
            </HStack>
          </VStack>
        </Alert>
      ) : null}
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in or Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <GoogleSigninButton disabled={isSigningIn} onPress={onSignIn} />
        </VStack>
      </Box>
    </Center>
  );
};

export default Unauthenticated;
