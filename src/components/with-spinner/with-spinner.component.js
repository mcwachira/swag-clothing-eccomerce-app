import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";


//hoc component
// const WithSpinner = WrappedContainer => ({ isLoading, ...otherProps }) => {

//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer />
//         </SpinnerOverlay>
//     ) :
//         (
//             <wrappedContainer {...otherProps} />
//         )

// }



const WithSpinner = WrappedContainer => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) :
            (
                <WrappedContainer {...otherProps} />
            )

    }

    return Spinner;

}

export default WithSpinner