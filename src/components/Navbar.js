import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <span class="badge bg-secondary">{props.productList.length > 0 ? props.productList.length : "Cart Empty ."}</span>
      </div>
    </nav>
  );
}

export default Navbar;
