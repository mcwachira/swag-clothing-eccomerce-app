// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import {
  getAuth, 
  signInWithRedirect ,
  signInWithPopup,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
   GoogleAuthProvider}  from 'firebase/auth'

    
import {
  getDoc, 
  setDoc,
   doc,
   getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA3qxZiTJp14pERpa4rQgoZivHlZBs8QK8",
  authDomain: "swag-v2-eccomerce.firebaseapp.com",
  projectId: "swag-v2-eccomerce",
  storageBucket: "swag-v2-eccomerce.appspot.com",
  messagingSenderId: "1035209681336",
  appId: "1:1035209681336:web:c7fa0d6a7f04ba7b38c74d"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//set up your auth provider (class}
const provider =  new GoogleAuthProvider()

//forces a user to select and account
provider.setCustomParameters({
  prompt:'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () =>  signInWithRedirect(auth, provider)

export const db =  getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) =>{

  //additionalInformation will contain the display name  and any other info
  if (!userAuth) return ;
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  //check if a user collection exist and if a specific document exist in the collection and if not create the collection and document 

if(!userSnapshot.exists()){
  const {displayName, email} =  userAuth
  const   createdAt = new Date();

  try{
    await setDoc(userDocRef, {
      displayName:displayName,
      email:email,
      createdAt:createdAt,
      ...additionalInformation
    
    })

  }catch(error){
    console.log('error creating user document', error.message)
  }
}

//if the snapshot exits wer just return it
return userDocRef

}

export const createAuthWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const  signInUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)

}