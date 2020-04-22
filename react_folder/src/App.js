import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header />
        <Intro />
        <Footer />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
