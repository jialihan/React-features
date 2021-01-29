import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // unit in cent
    const priceForStripe = price * 100;
    const publishableKey = 'your_developer_account_publishable_key';
    const onToken = (token) => {
        console.log(token);
        alert("payment success");
        // call back to handle payment success on your backend
    }

    return (
        <StripeCheckout
            label="Pay Now" // text inside the Stripe button
            name="Jelly's Clothing Ltd." // the pop-in header title
            image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
            description={`your total is ${price}`}
            panelLabel="Pay Now" // prepended to the amount in the bottom pay button
            amount={priceForStripe} // cents
            currency="USD"
            // Note: Enabling either address option will give the user the ability to
            // fill out both. Addresses are sent as a second parameter in the token callback.
            shippingAddress
            billingAddress
            token={onToken} // submit callback
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
