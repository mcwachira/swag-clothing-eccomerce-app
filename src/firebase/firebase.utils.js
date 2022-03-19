import firebase from 'firebase/compat/app';

//enables you to use gooleAuth -provider in your app
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAipkFORrkxMrILBGJmUq_N-6jKTE0Y0M0",
    authDomain: "swag-ecommerce-db.firebaseapp.com",
    projectId: "swag-ecommerce-db",
    storageBucket: "swag-ecommerce-db.appspot.com",
    messagingSenderId: "415060715975",
    appId: "1:415060715975:web:818d826c87b02a62e9d1e2"
};



//querying data from our firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {

            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new GoogleAuthProvider();
//trigger google popup for sign in whenever we use google auth provider for auth and sign in
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider).then((res) => {
    console.log(res.user)
}).catch((error) => {
    console.log(error.message)
})

export default firebase;