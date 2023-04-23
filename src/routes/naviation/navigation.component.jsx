import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.context'
const Navigation = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

  
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

       <Link className='nav-link' to='/shop'>SHOP</Link>
       {currentUser ? <span className='nav-link' onClick={signOutHandler}> SIGN OUT</span> :    <Link className='nav-link' to='/auth'>Sign in</Link>}
      
      <CartIcon/>


       </div>

{isCartOpen &&     <CartDropDown/>}
    
       
    
    </div>
        <Outlet/>
        </>
  )
}

export default Navigation