import React from "react";
import Logo from "../../assets/logo.png"
import Coin from "../../assets/dollar.png"

const Navbar = ({ coin }) => {
    const link = <>
            <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
    </>
    
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {
                link
              }
            </ul>
          </div>
          <a href="/"><img className="w-14 h-14" src={Logo} alt="" /></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                link
            }
            <button className="btn btn-primary">{coin} coin 
                <img className="w-5 h-5" src={Coin} alt="" /></button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
