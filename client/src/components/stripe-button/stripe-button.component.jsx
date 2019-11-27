import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import './stripe-button.styles.scss';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey  = 'pk_test_H0UVj9gESy86SRw9cEHN6hDN00fYCCnRpx';

  const onToken = token => {
      axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token
        }
      }).then(response => {
        alert('Payment was successful!')
      }).catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card'
        );
      });
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
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    </div>
  );
};

export default StripeCheckoutButton;
