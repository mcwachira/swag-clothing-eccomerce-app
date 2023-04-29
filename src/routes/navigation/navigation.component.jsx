import React, {useContext} from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import {NavigationContainer,
    LogoContainer,
    NavigationLinksContainer,
    NavigationLink,} from './navigation.styles'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

import { selectCartIsOpen } from '../../redux/cart/cart.selector'
import { setCurrentUser } from '../../redux/user/user.actions'
const Navigation = () => {

  
    const isCartOpen  = useSelector(selectCartIsOpen)

  

    const currentUser = useSelector((state)=> (state.user.currentUser))
    console.log(currentUser)
    const signOutHandler = async() => {

        await signOutUser()
        setCurrentUser(null)
    }
    // console.log(currentUser)
  return (
    <>

    <NavigationContainer>

        <LogoContainer>
            <Link to='/'>
            <CrownLogo className='logo'/>
            </Link>

            
        </LogoContainer>

    <NavigationLinksContainer>

       <NavigationLink  to='/shop'>SHOP</NavigationLink>
       {currentUser ? <span className='nav-link' onClick={signOutHandler}> SIGN OUT</span> :    <NavigationLink  to='/auth'>Sign in</NavigationLink>}
      
      <CartIcon/>


       </NavigationLinksContainer>

{isCartOpen &&     <CartDropDown/>}
    
       
    
    </NavigationContainer>
        <Outlet/>
        </>
  )
}

export default Navigation