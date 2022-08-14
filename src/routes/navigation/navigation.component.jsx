
import React, { Fragment,useContext } from "react"
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as SwagLogo } from '../../assets/crown.svg'

import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { NavigationContainer, NavLink, NavLinkContainer, LogoContainer } from "./navigation.styles"


import { useSelector, useDispatch } from "react-redux"
import { selectIsCartOpen } from "../../redux/cart/cart.selector"
import { selectCurrentUser } from "../../redux/user/user.selector"
const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)
    const showCart = useSelector(selectIsCartOpen)

    //getting current user from context 

    // const { currentUser } = useContext(UserContext)


    // const { showCart } = useContext(cartContext)



    const signOutHandler = async () => {
        await signOutUser()

    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <div>
                        <SwagLogo className="logo" />
                    </div>
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink className="nav-link" to='/shop'>Shop</NavLink>
                    {
                        currentUser ?
                            <NavLink as='span' className="nav-link" onClick={signOutHandler}> Sign Out</NavLink>
                            : <NavLink to='/authentication'>Sign In</NavLink>
                    }

                    <CartIcon />

                </NavLinkContainer>

                {
                    showCart && <CartDropdown />
                }


            </NavigationContainer>
            <Outlet />
            {/* outlet is used to persist the navigation bar */}
        </Fragment>




    )
}

export default Navigation