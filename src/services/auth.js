import { firebase } from "../lib/firebase";
import 'firebase/auth'

export const createUser = async (email, password) => {
  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  console.log(userCredential);
};
