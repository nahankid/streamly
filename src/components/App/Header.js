import React, { Component } from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "../../auth/GoogleAuth";

class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <div className="header item">Streamly</div>

        <div className="right menu">
          <Link to="/" className="item">
            Browse
          </Link>
          <Link to="/streams/new" className="item">
            Create
          </Link>
          <Link to="" className="item">
            <GoogleAuth />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
