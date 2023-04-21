import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
const Navigation = () => {
  return (
    <>

    <div className='navigation'>

        <div className='logo-container'>
            
           <CrownLogo className='logo'/>
            
        </div>

    <div className='nav-links-container'>
       <Link className='nav-link' to='/shop'>Shop</Link>
       </div>
    
    </div>
        <Outlet/>
        </>
  )
}

export default Navigation