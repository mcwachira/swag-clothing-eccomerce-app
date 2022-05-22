import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'



import {
    getFirestore,
    doc,
    setDoc,
    getDoc

} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAipkFORrkxMrILBGJmUq_N-6jKTE0Y0M0",
    authDomain: "swag-ecommerce-db.firebaseapp.com",
    projectId: "swag-ecommerce-db",
    storageBucket: "swag-ecommerce-db.appspot.com",
    messagingSenderId: "415060715975",
    appId: "1:415060715975:web:818d826c87b02a62e9d1e2"
};

// Initialize Firebase
const firebaseaApp = initializeApp(firebaseConfig);

//creating a new instance of the provider class
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
});



export const auth = getAuth()

//sign in with popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const SignInWithGoogleRedirect = () => signInWithRedirect(auth, provider)


//initializing our firestore db

export const db = getFirestore();

export const createUserDocumentFromAuth = async (

    userAuth,

    //additional information object enable us to collect information tha is not passes to the  createUserWithEmailAndPassword method.
    additionalInformation = {},


) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot.exists())

    //check if the data exits
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {

                displayName,
                email,
                createdAt,
                ...additionalInformation
            }

            )
        } catch (error) {
            console.log('error creating document', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(email, password)
}



export const signAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword(email, password)
}



//auth keeps the value of the current user
export const signOutUser = () => signOut(auth);




