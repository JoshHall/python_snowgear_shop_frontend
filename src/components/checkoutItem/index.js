import React, { Component } from 'react';
import './index.css';

class CheckoutItem extends Component {
  render() {
    return (
      <tr key={this.props.item.product.product_id}>
        <td>
          <button className="btn btn-primary" onClick={() => this.props.addCartItem(this.props.item.product.product_id, this.props.item.size)}>+</button> {this.props.item.quantity}  <button className="btn btn-danger" onClick={() => this.props.removeItem(this.props.item.product.product_id, this.props.item.size)}>-</button>
        </td>
        <td>{this.props.item.product.name}</td>
        <td>${this.props.item.product.price*this.props.item.quantity}</td>
        <td>{this.props.item.size}</td>
        <td>{this.props.item.product.desc}</td>
        
      </tr>
    );
  }
}

export default CheckoutItem;

// <td>{this.props.item.quantity}</td>
