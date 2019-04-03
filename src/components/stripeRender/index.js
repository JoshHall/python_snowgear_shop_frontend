import React, { Component } from 'react';
import './index.css';
import CheckoutItem from '../checkoutItem';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkoutForm';

class StripeRender extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_j5jUibU8tFHLeLPfUfYzSHNs">
        <div className="example offset-2">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeRender;
