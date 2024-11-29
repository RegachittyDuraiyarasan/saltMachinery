import React from 'react'
import dropdown from "../assets/images/dropdown.svg";
import "../assets/css/navbar.css";
const Navbar = () => {
  return (
   <>
<div className="navbar-sec">
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        {/* Left Side */}
        <div className="d-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  active" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item  dropdown">
                <a
                  className="nav-link active "
                  href="#products"
                  id="productsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                  <span><img src={dropdown} alt="dropdown" /></span>
                </a>
                
                <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                  <li>
                    <a className="dropdown-item" href="#salt-work-design">
                      Salt Work Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#trading">
                      Trading
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#about">
                  Salt work Design
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#about">
                  Trading
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="navbar-brand mx-auto" href="#">
          <img
            src="your-logo-url-here"
            alt="Brand Logo"
         
          />
        </a>

        {/* Right Side */}
        <div className="d-flex">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More Options
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#option1">
                  Option 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#option2">
                  Option 2
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More Options
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#option1">
                  Option 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#option2">
                  Option 2
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More Options
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#option1">
                  Option 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#option2">
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
</nav>
    </div>
   </>
  )
}

export default Navbar;