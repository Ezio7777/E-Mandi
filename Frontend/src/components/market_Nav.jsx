import React from "react";
import "../styles/market_Nav.css";
import { Link, useNavigate } from "react-router-dom";

function market_Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Mandi
        </Link>

        <form className="d-flex " role="search">
          <input
            className="form-control me-2 search_bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success " type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default market_Nav;
