import {initializeApp} from "firebase/app";
import {initializeAuth} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app);
