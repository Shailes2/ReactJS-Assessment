import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h2>Student Course Portal</h2>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}

export default Navbar;
