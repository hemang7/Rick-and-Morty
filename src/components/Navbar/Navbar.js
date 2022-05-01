import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light mb-5 fs-5">
      <div className="container">
        <Link
          to="/"
          className=" bangers my-4 fw-bold fs-1 text-decoration-none"
        >
          Rick and Morty
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
    
        {/* making the functionality for the hamburger menu for smaller screens and conditionally rendering the menu and exit buttons */}  
    
          <style jsx>
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }

              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>

          <i class="fa-solid fa fa-bars open"></i>
          <i class="fa-solid fa fa-times close"></i>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul class="navbar-nav gap-3">
            <li class="nav-item">
              <NavLink activeClassName="active" to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/episodes" className="nav-link">
                Episodes
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/location" className="nav-link">
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
