import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "./Products";
import Form from "./Form";

class Navbar extends Component {
  
  render() {
    return (
      <Router>
      <div>
      <nav  class=" navbar navbar-expand-lg navbar-expand navbar-light bg-light">
  <a class="navbar-brand" href="/">Market place</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link className="mx-3 text-dark" to="/">Productos</Link>
      </li>
      <li class="nav-item">
      <Link className="mx-3 text-dark" to="/form/">Subir Producto</Link>
      </li>
      
    </ul>
  </div>
</nav>
        <Route path="/" exact component={Products}/>
        <Route path="/form/" component={Form}/>
      </div>
      
      </Router>
    );
  }
}
export default Navbar;
