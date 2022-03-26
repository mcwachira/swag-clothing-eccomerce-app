import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51KhTzaFOlIiSsYbGruRAt00nHCaok5bTjj7rOUq4mvisKdl5Kz7qfQSzZm2U7ktjDhCO6CrUZNT7Qf8mH9zDSueX00ZZKirMPX'


    const onToken = token => {
        console.log(token)
        alert('Payment Succesfull')
    }
    return (


        <>
            <StripeCheckout
                label='Pay Now'
                name='Swag Clothing'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total price is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishablekey}
            />

        </>

    )

}

export default StripeCheckoutButton