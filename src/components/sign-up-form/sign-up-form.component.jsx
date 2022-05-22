import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss'
import Button from '../Button/button.component';
//setting up an object that will contain the initial form values
const formFields = {
    displayName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
}



const SignUpForm = () => {

    //setting up state for our form
    const [formData, setFormData] = useState(formFields);

    const { displayName, email, number, password, confirmPassword } = formData;

    const auth = getAuth()
    // console.log(formData)

    //function to detect changes in our form inputs and change the state based on the input changed
    const handleChange = (event) => {

        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })

    }


    //resetting our form inputs fields
    const resetFormFields = () => {
        setFormData(formFields)
    }


    //function to enable us to submit our form to firebase
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return
        }

        try {

            //here we are creating a user who will have the email and password passed in the method and the user will be stored in firebase
            const { user } = await createUserWithEmailAndPassword(auth, email, password)

            //here we are creating a new document and passing the display name from our for to our user data
            await createUserDocumentFromAuth(user, { displayName, number })
            resetFormFields()

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert('Email is already in use ')
            } else {


                console.log('error:', error)
            }
        }
    }
    return (
        <div className='sign-up-container'>
            <h2 >
                Don't Have an account
            </h2>
            <span>
                Sign up with your email and password
            </span>
            <form onSubmit={handleSubmit}>


                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />


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


                <FormInput
                    label="Confirm Password "
                    type="password"
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}

                />

                <Button type='submit'> Submit</Button>
            </form>

        </div>
    )
}

export default SignUpForm