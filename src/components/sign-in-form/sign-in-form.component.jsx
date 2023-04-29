import React, {useState} from 'react'
import { SignInContainer, ButtonContainer } from './sign-in-form.styles'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { signInWithGooglePopup ,  signInUserWithEmailAndPassword ,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'


const defaultFormFields = {

    email:"",
    password:"",

}

const SignInForm = () => {
    const [formValues, setFormValues] =  useState(defaultFormFields)

    const handleChange = (e) => {
const {name , value} =e.target
 setFormValues({...formValues, [name]: value})
    }

    const resetFormFields = () => {
setFormValues(defaultFormFields)
    }



    const loginGoogle =async () => {
        const {user} =   await signInWithGooglePopup()
       
 

       }
    const handleSubmit= async(e) => {

        e.preventDefault(); 

        
        try {
            const response = await signInUserWithEmailAndPassword(email, password)

           // console.log(response)
          resetFormFields()
            
        } catch (error) {
        switch(error.code){
            case 'auth/wrong-password':
                alert('Incorrect password for this email');
                break;
                case 'auth/user-not-found':
                alert('No user associated with that email');
                break;

                default:
                    console.log(error)
        }
        }
    }
     
    
    
    const { email, password} = formValues
    
    return (


    <SignInContainer>
        <h2>
         I already have an account ?
        </h2>
        
        <span> Sign in  with  your email and  password</span>
     <form onSubmit={handleSubmit}>
        
        <FormInput label="Email"type='text' required onChange={handleChange} name='email' value={email}/>    
    
       <FormInput label="Password"type='password' required onChange={handleChange} name='password' value={password}/>    
       

      
     
        </form>       
        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={loginGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonContainer>
        </SignInContainer>

    
  )
}

export default SignInForm