import React from 'react'
import './form-input.styles.scss'

//we have placed the  form input in its own component
const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input '   {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label `}> {label}</label>

            )}


        </div>
    )
}

export default FormInput