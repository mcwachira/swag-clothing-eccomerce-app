import React, {useState, useEffect} from 'react'
import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
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
         await  createUserDocumentFromAuth(user)

       }
    const handleSubmit= async(e) => {

        e.preventDefault(); 

        
        try {
            const response = await signInUserWithEmailAndPassword(email, password)
            console.log(response)
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


    <div  className='sign-up-container'>
        <h2>
         I already have an account ?
        </h2>
        
        <span> Sign in  with  your email and  password</span>
     <form onSubmit={handleSubmit}>
        
        <FormInput label="Email"type='text' required onChange={handleChange} name='email' value={email}/>    
    
       <FormInput label="Password"type='password' required onChange={handleChange} name='password' value={password}/>    
       

       <div className='buttons-container'>
       <Button type='submit'>
         
         Sign In 
        </Button>
        
 
        <Button type='button' buttonType='google' onClick={loginGoogle}>
          
          google 
         </Button>
       </div>
     
        </form>        
        </div>

    
  )
}

export default SignInForm