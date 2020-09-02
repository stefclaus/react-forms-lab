import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      submittedData: []
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
      }

  render() {
    return (
      <form onSubmit={event => this.handleLogin(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={event => this.handleUsernameChange(event)}
              value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={event => this.handlePasswordChange(event)}
              value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
