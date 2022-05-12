
import React, { useState } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = (emailSignInStart) => {



    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" })


    const { email, password } = userCredentials;
    const handleSubmit = async (e) => {
        e.preventDefault()

        // emailSignInStart(email, password)
        try {
            await auth.signInWithEmailAndPassword(email, password)

            setUserCredentials({ email: "", password: "", })

        } catch (error) {
            console.log(error)
        }


    }

    //This function takes the value from our input (email and password ) and updates the state by  assigning the name(email or password ) to its value
    const handleChange = (e) => {
        const { name, value } = e.target;
        //we are dynamically setting  our property value
        setUserCredentials({ ...userCredentials, [name]: value })

    }

    return (
        <div className='sign-in '>

            <h2>
                already have an account
            </h2>

            <span>
                Sign in with your email and password
            </span>

            <form onSubmit={handleSubmit}>

                <FormInput name='email' type="email" value={email} handleChange={handleChange} required label="email" />



                <FormInput name='password' type="password" value={password} handleChange={handleChange} required label="password" />




                <div className="buttons">

                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                </div>


            </form>
        </div>
    )
}


export default SignIn;