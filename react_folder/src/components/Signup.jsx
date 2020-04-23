import React, { Component } from "react";
import "../App.css";

const postAPI = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json());
  console.log(response);
  return response;
};

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: ""
  };

    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
    const { firstName, lastName, email, password, contact } = this.state;

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      user_password: password,
      is_admin: 'no',
      contact_me: contact
    };

    const url = 'http://localhost:2000/adduser';
    const response = await postAPI(url, data);

    if (response.status === 200) {
      alert('Account Created');
    }
    if (response.status !== 200) {
      alert('Unable to sign up. Please try again later or go to login page.');
    }
  }
  catch (err) {
    return err;
  }
  };

  render() {

    const { firstName, lastName, email, password, contact } = this.state;

    return (
      <div>
          <h1>Sign Up Here!</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            data-testid="messageText"
            placeholder="First Name"
            onChange={this.handleChange}
            name="firstName"
            value={firstName}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Last Name"
            onChange={this.handleChange}
            name="lastName"
            value={lastName}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Email"
            onChange={this.handleChange}
            name="email"
            value={email}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Password"
            onChange={this.handleChange}
            name="password"
            value={password}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Contact?"
            onChange={this.handleChange}
            name="contact"
            value={contact}
            required
          />
          <br/>
          <button type="submit" data-testid="submitButton">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
