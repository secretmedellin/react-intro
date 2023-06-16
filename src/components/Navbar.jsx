import React, { useState } from "react";
import Logo from "../Images/calles_logo.png";

const Navbar = (props) => {
  const { setActiveMenu } = props;
  const [curActiveMenu, setCurActiveMenu] = useState("AboutUs");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            id="logo-img"
            src={Logo}
            alt="Logo"
            width="50"
            height="24"
            className="d-inline-block align-text-top"
          />
          <p id="header">MERCH INKED 8 </p>
        </a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className={`nav-link btn-hover ${
                  curActiveMenu === "AboutUs" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setCurActiveMenu("AboutUs");
                  setActiveMenu("AboutUs");
                }}
              >
                About Us
              </button>
            </li>
            <li className="nav-item" id="navbar">
              <button
                className={`nav-link btn-hover ${
                  curActiveMenu === "Collections" ? "active" : ""
                }`}
                onClick={() => {
                  setCurActiveMenu("Collections");
                  setActiveMenu("Collections");
                }}
              >
                Collection
              </button>
            </li>
            <li className="nav-item " id="navbar">
              <button
                id="navbarYe"
                className={`nav-link btn-hover ${
                  curActiveMenu === "Hoodies" ? "active" : ""
                }`}
                onClick={() => {
                  setCurActiveMenu("Hoodies");
                  setActiveMenu("Hoodies");
                }}
              >
                Hoodies
              </button>
            </li>
            <li className="nav-item " id="navbar">
              <button
                id="navbarYe"
                className={`nav-link btn-hover ${
                  curActiveMenu === "LongSleves" ? "active" : ""
                }`}
                onClick={() => {
                  setCurActiveMenu("Hats");
                  setActiveMenu("Hats");
                }}
              >
                Hats
              </button>
            </li>
            <li className="nav-item " id="navbar">
              <button
                id="navbarYe"
                className={`nav-link btn-hover ${
                  curActiveMenu === "Tshirts" ? "active" : ""
                }`}
                onClick={() => {
                  setCurActiveMenu("Tshirts");
                  setActiveMenu("Tshirts");
                }}
              >
                T-Shirts
              </button>
            </li>
            <li className="nav-item " id="navbar">
              <button
                id="navbarYe"
                className={`nav-link btn-hover ${
                  curActiveMenu === "On-Sale" ? "active" : ""
                }`}
                onClick={() => {
                  setCurActiveMenu("OnSale");
                  setActiveMenu("OnSale");
                }}
              >
                On-Sale
              </button>
            </li>{" "}
            <li className="nav-item" id="navbar">
              <button
                className={`nav-link btn-hover ${
                  curActiveMenu === "ComingSoon" ? "active" : ""
                }`}
                onClick={() => {
                  setCurActiveMenu("ComingSoon");
                  setActiveMenu("ComingSoon");
                }}
              >
                Coming Soon
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
