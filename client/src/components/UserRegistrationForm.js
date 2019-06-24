import React, { Component } from "react";
import axios from "axios";

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.firstName + " " + this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    axios.post(`/api/auth/register`, { user }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="error-message">{this.state.errorMessage}</div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            name="firstName"
            value={this.state.firstName}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name</label>
          <input
            name="lastName"
            value={this.state.lastName}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            type="email"
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
          />
          <button>Send data!</button>
        </form>
      </div>
    );
  }
}

export default UserRegistrationForm;
