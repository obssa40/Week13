import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <input
            className="text-input"
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />

          <input
            className="text-input"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
