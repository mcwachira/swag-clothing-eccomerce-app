import React, {useState} from 'react'
import { SignUpContainer } from './sign-up-form.styles';
import { createAuthWithEmailAndPassword , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';



const defaultFormFields = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"", 
}

const SignUpForm = () => {
    const [formValues, setFormValues] =  useState(defaultFormFields)

    const dispatch = useDispatch()

    const handleChange = (e) => {
const {name , value} =e.target
 setFormValues({...formValues, [name]: value})
    }

    const resetFormFields = () => {
setFormValues(defaultFormFields)
    }

    const handleSubmit= async(e) => {

        e.preventDefault(); 


        //check if password and confirm password are correct

        if(password!== confirmPassword){
            alert('passwords do not match')
            return
        }
        
        try {
           dispatch(signUpStart(email,password, displayName))
          resetFormFields()
    
       
            
        } catch (error) {
            if(error.code ==='auth/email-already-in-use'){
                alert('Cannot create user with the email as it is in use')
            } else{
            console.log('error creating user from document', error)
        }
    }
    }    
    
    
    const {displayName, email, password, confirmPassword} = formValues
    
    return (


    <SignUpContainer>
        <h2>
           Don't Have an account ?
        </h2>
        
        <span> Sign Up with email and  password</span>
     <form onSubmit={handleSubmit}>
        
       <FormInput label=" Display Name"type='text' required onChange={handleChange} name='displayName' value={displayName} />        
      
       <FormInput label="Email"type='text' required onChange={handleChange} name='email' value={email}/>    
    
       <FormInput label="Password"type='password' required onChange={handleChange} name='password' value={password}/>    
       
       <FormInput label="Confirm Password"type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>   
       <Button type='submit'>
         
        Sign up 
       </Button>
       
        </form>        
        </SignUpContainer>

    
  )
}

export default SignUpForm