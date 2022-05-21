
import React, { Fragment } from "react"
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as SwagLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
const Navigation = () => {
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
                    <Link className="nav-link" to='/sign-in'>Sign In</Link>
                </div>
            </div>
            <Outlet />
            {/* outlet is used to persist the navigation bar */}
        </Fragment>




    )
}

export default Navigation