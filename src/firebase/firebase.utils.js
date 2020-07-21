import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-4324bvofSOZ4IlmVQdU7cfhuLRQFHWI",
  authDomain: "crwn-db-63b49.firebaseapp.com",
  databaseURL: "https://crwn-db-63b49.firebaseio.com",
  projectId: "crwn-db-63b49",
  storageBucket: "crwn-db-63b49.appspot.com",
  messagingSenderId: "657552512027",
  appId: "1:657552512027:web:f0b652277cdf3c526c14be",
  measurementId: "G-HY7BNN4K9K",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
