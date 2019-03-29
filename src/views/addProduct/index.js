import React, { Component } from 'react';
import './index.css';

class AddRemoveProduct extends Component {

  saveProduct = async(e) => {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let price = e.target.elements.price.value;
    let size = e.target.elements.size.value;
    let shoe_size = e.target.elements.shoe_size.value;
    let desc = e.target.elements.desc.value;
    let genre = e.target.elements.genre.value;

    // console.log(title, day, month, year, notes);

    let url = '/api/save';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'name': name,
        'price': price,
        'size': size,
        'shoe_size': shoe_size,
        'genre': genre,
        'desc': desc
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${data.success}`);
    }
    else if (data.error) {
      alert(`${data.error}`);
    }
    else {
      alert('We are sorry, but that did not work. Please try again.');
    }
  }

  getEvents = async(e) => {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let price = e.target.elements.price.value;
    let genre = e.target.elements.genre.value;
    let size = e.target.elements.size.value;
    let shoe_size = e.target.elements.shoe_size.value;
    let desc = e.target.elements.desc.value;

    // console.log(month, day, year);
    let url = '/api/retrieve';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'name': name,
        'price': price,
        'size': size,
        'shoe_size': shoe_size,
        'genre': genre,
        'desc': desc
      }
    });

    let products = await response.json();

    // sort by name then by size
    products.sort(function(a,b) {
      return a.name - b.name;
    });

    products.sort(function(a,b) {
      if (a.name === b.name) {
        if (a.size != null) {
          return a.size - b.size;
        }
        if (a.shoe_size != null) {
          return a.shoe_size - b.shoe_size;
        }
      }
    });

    // console.log(data);
    // if the variable you are saving into the state is the same, you can just use the code below instead of products: events
    this.setState({ products });
  }

  removeEvent = async(id) => {
    if (!window.confirm('Would you really like to delete this event?')) {
      return;
    }

    // id.preventDefault();
    let url = '/api/delete';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'event_id': id
      }
    });

    let message = await response.json();
    console.log(message);
    if(message.success) {
      let products = this.state.products;

      for (let i in products)  {
        if (products[i].event_id === id) {
          products.splice(i, 1);
          break;
        }
      }
      this.setState({ products });
      alert('Product successfully deleted.');

    } else {
      alert('Sorry, but we could not delete the product. Please try again later.');
    }

  }


  render() {
    return (
      <div className='container'>

      </div>
    );
  }
}

export default AddProduct;
