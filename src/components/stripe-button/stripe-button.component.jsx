import React from 'react';

import StripeCheckout from "react-stripe-checkout";

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceFormStripe = price * 100;
  const publishableKey  = 'pk_test_H0UVj9gESy86SRw9cEHN6hDN00fYCCnRpx';

  const onToken = token => {
    console.log(token);
    alert('Payment successfull')
  };

  return (
    <div>
        <StripeCheckout
          label='Pay now'
          name='CRWN clothing Ltd.'
          billingAddress
          shippingAddress
          image="https://svgshare.com/i/CUz.svg"
          description={`Your total is $${price}`}
          amount={priceFormStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    </div>
  );
};

export default StripeCheckoutButton;
