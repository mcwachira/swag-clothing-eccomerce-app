
import React, { Fragment, useContext } from "react"
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as SwagLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {

    //getting current user from context 

    const { currentUser, setCurrentUser } = useContext(UserContext)



    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div>
                        <SwagLogo className="logo" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    {
                        currentUser ?
                            <span className="nav-link" onClick={signOutHandler}> Sign Out</span>
                            : <Link className="nav-link" to='/authentication'>Sign In</Link>
                    }

                </div>
            </div>
            <Outlet />
            {/* outlet is used to persist the navigation bar */}
        </Fragment>




    )
}

export default Navigation