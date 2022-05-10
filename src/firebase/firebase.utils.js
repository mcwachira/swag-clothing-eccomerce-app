import firebase from 'firebase/compat/app';

//enables you to use googleAuth -provider in your app
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
    // const collectionRef = firestore.collection('users')


    const snapshot = await userRef.get()
    // const collectionSnapshot = await collectionRef.get()
    // console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });



    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                // creating a new document with all properties below
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


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        console.log(newDocRef)

        //we are batching all calls to gether where we  are setting our NewDcRef to obj.
        batch.set(newDocRef, obj)
    })
    // console.log(collectionRef)


    //returns a promise
    return await batch.commit()
}


//converting our data to an object
export const convertCollectionSnapShotToMaps = (collectionsSnapshot) => {

    const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {

        const { title, items } = docSnapshot.data()



        //we return an object containing the data that will be rendered on our page
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items,
        }

    }

    )

    return transformedCollection.reduce((accumulator, collection) => {

        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})


    //console.log(transformedCollection);


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