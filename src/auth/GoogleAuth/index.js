import React from "react";
import { connect } from "react-redux";

import { googleAuthSignedIn, googleAuthSignedOut } from "./actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "339505566091-3mi7a1f3p5i2e3n2vfc0dttf31j155ek.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = signedIn => {
    if (signedIn) {
      this.props.googleAuthSignedIn(this.auth.currentUser.get());
    } else {
      this.props.googleAuthSignedOut();
    }
  };

  onSignInClick = () => {
    const { isSignedIn } = this.props;

    if (isSignedIn) {
      this.auth.signOut();
    } else {
      this.auth.signIn();
    }
  };

  renderAuthLink = () => {
    const { isSignedIn } = this.props;

    return (
      <button
        className="ui google plus icon button"
        onClick={this.onSignInClick}
      >
        <i className="google plus icon" />
        {isSignedIn ? " Sign out" : " Sign in"}
      </button>
    );
  };

  render() {
    return this.renderAuthLink();
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.googleAuth.isSignedIn
});

export default connect(
  mapStateToProps,
  { googleAuthSignedIn, googleAuthSignedOut }
)(GoogleAuth);
