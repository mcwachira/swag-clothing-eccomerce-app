import React from 'react';
import { Route, Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionContainer } from './header.styles';


import { connect } from 'react-redux';


const Header = ({ currentUser, hidden }) => (




    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>

        <OptionContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>

            {currentUser ?
                (<OptionDiv onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionDiv>
                ) : (

                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                )}
            <CartIcon />
        </OptionContainer>
        {
            hidden ? null : <CartDropdown />
        }

    </HeaderContainer>

)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);