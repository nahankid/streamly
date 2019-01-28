import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../../routes";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
