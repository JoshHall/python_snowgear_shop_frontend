import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Shop from './views/shop';
// import products from './products.js';
import Cart from './views/cart';
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './views/checkoutForm';

class App extends Component {
  constructor() {
    super();
    this.state= {
      'products': [],
      'cart': [],
      'total': 0
    }

    this.calcTotal = this.calcTotal.bind(this);
  }

  componentWillMount() {
    this.getProducts();
    this.setState({ 'cart': JSON.parse(sessionStorage.getItem('cart')) });
    this.calcTotal();
  }

  countDuplicates = (id, size) => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    let count = 0;
    for (let i in cart) {
      if (cart[i].product.product_id === id && cart[i].size === size) {
        count += 1;
      }
    }
    return count
  }

  addItem = id => {
    if (sessionStorage.getItem('cart')) {
      var cart = JSON.parse(sessionStorage.getItem('cart'));
    }
    else {
      cart = [];
    }

    for (let i in this.state.products) {
      if(this.state.products[i].product_id === id) {

        // Get the selected size option
        let sizes = document.getElementById("sizes" + this.state.products[i].product_id);
        let size = sizes.selectedOptions[0].label;
        // console.log(size)

        // Update quantity
        let count = this.countDuplicates(id,size);

        if (count <= 0) {
          cart.push({
            'product': this.state.products[i],
            'size': size,
            'quantity': 1
          });
        } else {
          for (let j in cart) {
            if (cart[j].size === size && cart[j].product.product_id === id && count >= 1) {
              cart[j].quantity += 1;
              break;
            }
          }
        }

        break;
      }
    }

    console.log(cart)

    sessionStorage.setItem('cart', JSON.stringify(cart));

    this.calcTotal();
    this.setState({'cart': cart});
  }

  addCartItem = (id,size) => {
    // get cart key from sessionStorage and parse it into object
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    for (let i in cart) {
      if(cart[i].product.product_id === id && cart[i].size === size) {
        if (cart[i].quantity >= 1) {
          cart[i].quantity += 1;
          break;
        }
      }
    }

    sessionStorage.setItem('cart',JSON.stringify(cart));

    this.calcTotal();
    this.setState({'cart': cart});
  }

  removeItem = (id,size) => {
    // get cart key from sessionStorage and parse it into object
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    for (let i in cart) {
      if(cart[i].product.product_id === id && cart[i].size === size) {
        if (cart[i].quantity > 1) {
          cart[i].quantity -= 1;
          break;
        } else {
          cart.splice(i, 1);
          break;
        }
      }
    }

    sessionStorage.setItem('cart',JSON.stringify(cart));

    this.calcTotal();
    this.setState({'cart': cart});

  }

  // calculating and returning the Total
  calcTotal() {
    // get value and parse sessionStorage
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    // use state before changing to session storage
    // let cart = this.state.cart;
    let total = 0;

    for (let product in cart) {
      total += (cart[product].product.price * cart[product].quantity);
    }

    total = total.toFixed(2);

    this.setState({'total': total});
  }

  getFiltered = async() => {
    let url = 'https://snow-gear-shop-backend.herokuapp.com/api/filter';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let products = await response.json();

    // if the variable you are saving into the state is the same, yu cane just use the code below instead of events: events
    this.setState({ products });
  }


  getProducts = async() => {
    let url = 'https://snow-gear-shop-backend.herokuapp.com/api/retrieve';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let products = await response.json();

    // if the variable you are saving into the state is the same, you can just use the code below instead of events: events
    this.setState({ products });
  }


  render() {
    return (
      <div className="App">
        <Header total={this.state.total}/>

        <Switch>
          <Route exact path='/' render={() => <Home products={this.state.products}/>} />
          <Route exact path='/shop' render={() => <Shop products={this.state.products} addItem={this.addItem}/>} />
          <Route exact path='/cart' render={() => <Cart cart={this.state.cart} total={this.state.total} removeItem={this.removeItem} addCartItem={this.addCartItem}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
