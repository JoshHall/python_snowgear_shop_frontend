import React, { Component } from 'react';
import './index.css';
import ProductItem from '../../components/productItem';


class Shop extends Component {
  render() {
    return (
      <div className="container">
        <ProductItem products={this.props.products} addItem={this.props.addItem} />
      </div>
    );
  }
}

export default Shop;
