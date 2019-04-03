import React, { Component } from 'react';
import './index.css';
import CheckoutTable from '../../components/checkoutTable';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../../components/checkoutForm';

class Cart extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <CheckoutTable cart={this.props.cart} total={this.props.total} removeItem={this.props.removeItem} addCartItem={this.props.addCartItem}/>
          {/*<StripeProvider apiKey="pk_test_j5jUibU8tFHLeLPfUfYzSHNs">
            <div className="example offset-2">
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
          */}
        </div>
      </div>
    );
  }
}

export default Cart;
