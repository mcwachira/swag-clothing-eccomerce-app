import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext)

    const signOutHandler = async() => {

        await signOutUser()
        setCurrentUser(null)
    }
    console.log(currentUser)
  return (
    <>

    <div className='navigation'>

        <div className='logo-container'>
            <Link to='/'>
            <CrownLogo className='logo'/>
            </Link>

            
        </div>

    <div className='nav-links-container'>

       <Link className='nav-link' to='/shop'>Shop</Link>
       {currentUser ? <span className='nav-link' onClick={signOutHandler}> Sign Out</span> :    <Link className='nav-link' to='/auth'>Sign in</Link>}
       </div>
    
    </div>
        <Outlet/>
        </>
  )
}

export default Navigation