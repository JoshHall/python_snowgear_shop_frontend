import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>{<Route exact path="/" render={() => <Home />} />}</Switch>
      </div>
    );
  }
}

export default App;

// <Switch>
//   <Route exact path='/' render={() => <Schedule />} />
//   <Route exact path='/events' render={() => <Events />} />
// </Switch>
