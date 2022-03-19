
import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            email: "",
            password: ""
        })
    }

    //This function takes the value from our input (email and password ) and updates the state by  assigning the name(email or password ) to its value
    handleChange = (e) => {
        const { name, value } = e.target;
        //we are dynamically setting  our property value
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in '>

                <h2>
                    already have an account
                </h2>

                <span>
                    Sign in with your email and password
                </span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name='email' type="email" value={this.state.email} handleChange={this.handleChange} required label="email" />



                    <FormInput name='password' type="password" value={this.state.password} handleChange={this.handleChange} required label="password" />




                    <div className="buttons">

                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>


                </form>
            </div>
        )
    }
}

export default SignIn;