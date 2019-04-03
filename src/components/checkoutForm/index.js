import React, {Component} from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import './index.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token);
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    // if (response.ok) console.log("Purchase Complete!");
    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    if (this.state.failed) return <h1>Purchase Failed</h1>;

    return (
      <div className="checkout">
        <p>Soon to have Stripe payment system</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);



  // handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('test');
  // }

  // <form
  //   className="form-group mt-3 border border-primary rounded shadow-lg p-3"
  // >
  //   onSubmit={this.handleSubmit}
  //   <label>Name</label>
  //   <input
  //     type="text"
  //     className="input-group my-1 p1 border border-dark"
  //     value={this.state.name}
  //     onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
  //   />
  //
  //   <label>Amount</label>
  //   <input
  //     type="text"
  //     className="input-group my-1 p1 border border-dark"
  //     value={this.state.amount}
  //     onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
  //   />
  //
  //   <label>CC Number -- Exp. Date -- CVC</label>
  //   <CardElement className="p-2 border border-dark" />
  //   <button className="btn btn-primary border border-dark shadow mt-3">Submit</button>
  // </form>


  // interface IFormPage {
  //
  // }
  //
  // interface IFormState {
  //   name: string;
  //   amount: sting;
  // }
