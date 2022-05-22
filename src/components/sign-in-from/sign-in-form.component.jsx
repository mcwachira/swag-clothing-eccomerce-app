import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import Button from '../Button/button.component'
import './sign-in-form.styles.scss'
const formFields = {
    email: "",
    password: "",
}
const SignInForm = () => {
    const [signInData, setSignInData] = useState(formFields)

    console.log(signInData)
    //
    const { email, password } = signInData;
    const handleChange = (event) => {
        const { name, value } = event.target;

        setSignInData({ ...signInData, [name]: value })


    }

    const resetSignInData = () => {
        setSignInData(formFields)
    }


    //why ise this???
    // const SignInWithGoogle = async() => {
    //     const {user } = await signInWithGooglePopup();
    //     await createUserDocumentFromAuth(user)
    // }
    //function to enable us to submit our form to firebase
    const handleSubmit = async (event) => {
        event.preventDefault()


        try {

            //here we are creating a user who will have the email and password passed in the method and the user will be stored in firebase
            const response = await signInWithEmailAndPassword(getAuth(), email, password)

            resetSignInData()

            console.log(response)
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
        <div className='sign-in-container'>
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
                <div className="button-Container">
                    <Button type='submit'> Submit</Button>
                    <Button type='button' buttonType="google" onClick={() => (signInWithGooglePopup())}> Sign in with Google</Button>


                </div>
            </form>



        </div>
    )
}

export default SignInForm