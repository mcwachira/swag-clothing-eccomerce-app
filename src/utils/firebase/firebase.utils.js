// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import {
  getAuth, 
  signInWithRedirect ,
  signInWithPopup,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
   GoogleAuthProvider,
   signOut,
   onAuthStateChanged,
  
  
  }  from 'firebase/auth'

    
import {
  getDoc, 
  setDoc,
   doc,
   getFirestore,
   collection,
   writeBatch,
   query,
   docs,
   getDocs,
  
  
  } from 'firebase/firestore'
import { batch } from "react-redux";
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

//adding data to firestore database

//collectionKey = name fo collection , objectsToAdd = data in collection
export const addCollectionsAndDocuments =  async(collectionKey, objectsToAdd) => {

  const collectionRef = collection(db, collectionKey);


  const batch = writeBatch(db)
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })


//this will push our data to the firebase database
await batch.commit();
console.log('done')
}



//fetch data from our database
export const getCategoriesAndDocuments =  async() => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  //this will give us a snapshot of our categories data
  const querySnapShot = await getDocs(q)

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
    const {title, items} =docSnapshot.data()
    acc[title.toLowerCase()] = items

    return acc
  }, {})

  return categoryMap;

}




export const createUserDocumentFromAuth = async (userAuth, additionalInformation) =>{

  //additionalInformation will contain the display name  and any other info
  if (!userAuth) return ;
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot)
  // console.log(userSnapshot.exists())

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
return userSnapshot

}

//auth contains the details of the signed in

export const createAuthWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const  signInUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async() => {
  await signOut(auth)
}
export const onAuthStateChangeListener = (callback) => {
  return  onAuthStateChanged(auth, callback)
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
  
const unsubscribe =  onAuthStateChanged(auth, 

    (userAuth) =>{
    
    //prevent memory leak
    unsubscribe();
    resolve(userAuth)

  },
  reject 
  )
})

}