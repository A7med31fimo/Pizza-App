import { auth } from "../Config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
  updateProfile,signOut
} from "firebase/auth";


onAuthStateChanged(auth, (user) => {
  if (user != null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });

  }

  // Do other things
});

function register(email, password,Name) {
 return  createUserWithEmailAndPassword(auth, email, password,Name).then(
(res)=>{updateProfile(res.user,{displayName:Name}).then(() => {
  console.log("updated")
}).catch((error) => {
});}   
   )
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

async function SignOut(){
return signOut(auth).then(() => {

}).catch((error) => {
  
});

}

async function getUserUId() {
  if (auth.currentUser != null) {
      return auth.currentUser.uid;
  } else {
      return null;
  }
}


export { register, login,SignOut ,getUserUId};