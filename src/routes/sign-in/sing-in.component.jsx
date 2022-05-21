import React from 'react'
import { signInWithGooglePopup, createUserFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logInGoogle = async () => {
        const { user } = await signInWithGooglePopup();

        const useRef = createUserFromAuth(user)

    }
    return (
        <div>
            <h1>
                Sign In page
            </h1>

            <button onClick={logInGoogle}>
                sign in google
            </button>

        </div>
    )
}

export default SignIn