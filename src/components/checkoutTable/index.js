import React, { Component } from 'react';
import './index.css';
import CheckoutItem from '../checkoutItem';

class CheckoutTable extends Component {
  render() {
    return (
      <table id="cart" className="table table-dark">
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
              <CheckoutItem item={item} removeItem={this.props.removeItem}/>
            )
          }
        </tbody>
        <tfoot>
            <tr>
              <th colSpan="2">Total:</th>
              <th colSpan="2" className="total">${this.props.total}</th>
            </tr>
            {/*
            <tr>
              <th colSpan="2"></th>
              <th id="pay">
                <!-- Render Stripe button in JS -->
              </th>
            </tr>
            */}
          </tfoot>
      </table>
    );
  }
}

export default CheckoutTable;
