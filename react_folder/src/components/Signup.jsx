import React, { Component } from "./node_modules/react";
import "../App.css";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
  };

  changeFirstname = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  changeLastname = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  changeContact = (e) => {
    this.setState({
      contact: e.target.value,
    });
  };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       user_password: password,
//       contact_me: contact,
//     };
//     const url = "http://localhost:3001/signup";

//     const response = await postAPI(url, data);

//     if (response.status === 200) {
//       alert("Thank you for signing up!");
//     }
//     if (response.status !== 200) {
//       alert("Unable to signup. Please try again later or go to login page.");
//     }
//   };

//   postAPI = async (url, data) => {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     return response;
//   };

  render() {

    const { firstName, lastName, email, password, contact } = this.state;

    return (
      <div>
          <h1>Sign Up Here!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            data-testid="messageText"
            placeholder="First Name"
            onChange={this.changeFirstname}
            value={firstName}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Last Name"
            onChange={this.changeLastname}
            value={lastName}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Email"
            onChange={this.changeEmail}
            value={email}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Password"
            onChange={this.changePassword}
            value={password}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Contact?"
            onChange={this.changeContact}
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
