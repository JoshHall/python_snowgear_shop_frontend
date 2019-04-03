import React, { Component } from 'react';
import './index.css';
import CheckoutItem from '../checkoutItem';
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from '../checkoutForm';

class CheckoutTable extends Component {
  render() {
    return (
      <table id="cart" className="col-md-8 offset-2 table table-dark">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart &&
            this.props.cart.map( item =>
              <CheckoutItem item={item} removeItem={this.props.removeItem} addCartItem={this.props.addCartItem}/>
            )
          }
        </tbody>
        <tfoot>
            <tr>
              <th colSpan="2">Total:</th>
              <th colSpan="4" className="total">${this.props.total}</th>
            </tr>

            <tr>
              <th colspan="6" className="checkout-btn">
                <button className="btn btn-primary disabled" >Soon to open up Stripe Checkout</button>
              </th>
            </tr>

          </tfoot>
      </table>
    );
  }
}

export default CheckoutTable;
