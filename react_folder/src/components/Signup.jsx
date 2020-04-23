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
    contact: "",
    submitFirstName: "",
    submitLastName: "",
    submitEmail: "",
    submitPassword: "",
    submitContact: ""
  };

    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({
      submitFirstName: this.firstName,
      submitLastName: this.lastName,
      submitEmail: this.email,
      submitPassword: this.password,
      submitContact: this.contact
    })

    console.log(this.submitFirstName)
    console.log(this.firstName)
    const data = {
      first_name: this.submitFirstName,
      last_name: this.submitLastName,
      email: this.submitEmail,
      user_password: this.submitPassword,
      is_admin: "no",
      contact_me: this.submitContact
    };
    const url = "http://localhost:2000/adduser";

    const response = await postAPI(url, data);
    console.log(this.submitFirstName);

    if (response.status === 200) {
      alert("Account Created");
    }
    if (response.status !== 200) {
      alert("Unable to sign up. Please try again later or go to login page.");
    }
  };

  render() {

    const { firstName, lastName, email, password, contact } = this.state;

    return (
      <div>
          <h1>Sign Up Here!</h1>
        <form onSubmit={() => this.handleSubmit()}>
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
