import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, SignInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
const SignIn = () => {


    //this will show a login with google popup on our current page
    const logInGoogle = async () => {
        const { user } = await signInWithGooglePopup();

        const useRef = createUserDocumentFromAuth(user)

    }
    //this will open a new page where will login using google.
    const logInGoogleRedirect = async () => {
        const { user } = await SignInWithGoogleRedirect();

        const useRef = createUserDocumentFromAuth(user)

    }
    return (
        <div>
            <h1>
                Sign In page
            </h1>

            <button onClick={logInGoogle}>
                sign in google
            </button>
            <button onClick={logInGoogleRedirect}>
                sign in google Redirect
            </button>


            <SignUpForm />
        </div>
    )
}

export default SignIn