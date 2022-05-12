import React, { useState } from 'react'
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
const SignUp = () => {

    const [signUpDetails, setSignUpDetails] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { displayName, email, password, confirmPassword } = signUpDetails

        if (password !== confirmPassword) {
            alert("password don't Match")
            return;
        }

        try {
            const { user } = auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user, { displayName });
            setSignUpDetails({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            })


        } catch (error) {
            console.log("error", error.message)
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setSignUpDetails({ ...signUpDetails, [name]: value })
    }

    const { displayName, email, password, confirmPassword } = signUpDetails;
    return (
        <div className='sign-up'>
            <h2 className='title'>
                Sign up component
            </h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required />

                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>

            </form>
        </div>
    )
}


export default SignUp;