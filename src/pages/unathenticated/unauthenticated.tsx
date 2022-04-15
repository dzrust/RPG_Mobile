import React, {useState} from "react";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import {Card, Layout, Text} from "@ui-kitten/components";
import {pageStyles} from "../../styles/page";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faExclamation} from "@fortawesome/pro-solid-svg-icons";
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
    <Layout style={pageStyles.container}>
      {error.length > 0 ? (
        <Card>
          <Layout style={{flexDirection: "row"}}>
            <FontAwesomeIcon icon={faExclamation} />
            <Text style={pageStyles.paragraph}>{error}</Text>
          </Layout>
        </Card>
      ) : null}
      <Text style={pageStyles.heading} category="h1">
        Welcome
      </Text>
      <Text style={pageStyles.paragraph}>Sign in or Sign up to continue!</Text>

      <GoogleSigninButton disabled={isSigningIn} onPress={onSignIn} />
    </Layout>
  );
};

export default Unauthenticated;
