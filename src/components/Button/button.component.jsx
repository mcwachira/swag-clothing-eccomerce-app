import React from 'react'
import './button.styles.scss'


//this object specifies the styles will give our button based on its type
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}
const Button = ({ children, buttonType, ...otherProps }) => {
    return (

        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;