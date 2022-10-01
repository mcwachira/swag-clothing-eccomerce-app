import React, { useState, useContext } from 'react'
import FormInput from '../form-input/form-input.component'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component'

import { SignInContainer, ButtonContainer } from './sign-in-form.styles'
const formFields = {
    email: "",
    password: "",
}
const SignInForm = () => {
    const [signInData, setSignInData] = useState(formFields)


    //get setCurrentUser fro userContext

    // const { setCurrentUser } = useContext(UserContext)


    console.log(signInData)
    //
    const { email, password } = signInData;
    const handleChange = (event) => {
        const { name, value } = event.target;

        setSignInData({ ...signInData, [name]: value })


    }

    //



    const resetSignInData = () => {
        setSignInData(formFields)
    }


    //function to enable us to sign in using our google account
    //why ise this???
    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();

    }
    //function to enable us to submit our form to firebase
    const handleSubmit = async (event) => {
        event.preventDefault()


        try {

            //Firebase method to help us to sign in using our email and password 
            const { user } = await signInWithEmailAndPassword(getAuth(), email, password)


            resetSignInData()

        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('user wit that email does not exits');
                    break;
                default: console.log('error:', error)

            }


        }
    }
    return (
        <SignInContainer>
            <h2>
                I already Have an Account
            </h2>

            <span>
                Sign up with your email and password
            </span>
            <form onSubmit={handleSubmit}>




                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}

                />


                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}

                />
                <ButtonContainer>
                    <Button type='submit'> Submit</Button>

                    {/* passed the firebase signInWithGooglePopup method directly on the onclick method 
                    instead of passing another function to help us sign in with google */}
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>  Google Sign In</Button>


                </ButtonContainer>
            </form>



        </SignInContainer>
    )
}

export default SignInForm