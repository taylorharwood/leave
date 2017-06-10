import React, { Component } from 'react';
import Error from './Error';
import Success from './Success';
import '../styles/register.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      password: null
    }
  }

  renderSuccess() {
    return <Success success={this.props.success} />
  }

  renderError() {
    return <Error error={this.props.error} />
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.doRegister(
      this.state.name,
      this.state.email,
      this.state.password
    );
  }

  render() {
    return (
      <div id="register">
        <h1>Register</h1>
        { this.props.error ? this.renderError() : '' }
        { this.props.success ? this.renderSuccess() : '' }
        <form>
          <input
            type="text"
            value={ this.state.name }
            onChange={ event => this.handleNameChange(event) }
            className="form-control"
            placeholder="Enter your name..." />
          <br />
          <input
            type="email"
            value={ this.state.email }
            onChange={ event => this.handleEmailChange(event) }
            className="form-control"
            placeholder="Enter your email..." />
          <br />
          <input
            type="password"
            value={ this.state.password }
            onChange={ event => this.handlePasswordChange(event) }
            className="form-control"
            placeholder="Enter your password..." />
          <br />
          <button
            onClick={ event => this.handleClick(event) }
          >
            Register
          </button>
        </form>
      </div>
    );
  }
};

export default Register;
