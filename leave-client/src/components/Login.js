import React, { Component } from 'react';
import Error from './Error';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    }
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();

    this.props.doLogin(
      this.state.email,
      this.state.password
    );
  }

  renderError() {
    console.log(this.props.error);
    return <Error error={this.props.error} />
  }

  render() {
    return (
      <div id="login">
        <h1>Login</h1>
        { this.props.error ? this.renderError() : '' }
        <form>
          <input
            type="email"
            value={ this.state.loginEmail }
            onChange={ this.handleEmailChange.bind(this) }
            className="form-control"
            placeholder="Enter your email..."
            onChange={ this.handleEmailChange.bind(this) }
          />
          <br />
          <input
            type="password"
            value={ this.state.loginPassword }
            onChange={ this.handlePasswordChange.bind(this) }
            className="form-control"
            placeholder="Enter your password..."
            onChange={ this.handlePasswordChange.bind(this) }
          />
          <br />
          <button onClick={(event) => this.handleClick(event)}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
