import React from "react";
import "./Navbar.css";
import Logo from "../component/Logo";
import SearchSection from "../component/Search";
import "./View.css";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md primary-color  mb-3 grid-3">
      <div className="flex-row d-flex">
        <button
          type="button"
          className="navbar-toggler mr-2 "
          data-toggle="offcanvas"
          title="Toggle responsive left sidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand"
          href="#"
          title="Free Bootstrap 4 Admin Template"
        >
          <Logo />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <SearchSection />
      </div>
      <div>
        <div>
          <div>
            <div className="profile">
              <p>
                <i className="far fa-bell mr-3 profile-bell"></i>
              </p>
              <p>Nicholas D.</p>
              <img src="./image/b_1.jpeg" className="profile_img"></img>
              <p>
                <i className="fa fa-angle-down ml-3"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
