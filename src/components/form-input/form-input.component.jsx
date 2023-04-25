import React from 'react'
import {FormInputLabel, Input, Group} from  './form-input.styles.js'

//we have placed the  form input in its own component
const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input    {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}> {label}</FormInputLabel>

            )}


        </Group>
    )
}

export default FormInput