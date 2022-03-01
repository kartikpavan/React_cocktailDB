import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Navbar() {
  return (
    <div className="navbar mb-12 shadow-lg bg-accent text-xl font-bold ">
      <div className="container mx-auto ">
        <div className="mx-2 px-2">
          <Link to="/">
            {' '}
            <img src={logo} alt="sdesd" />{' '}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end  ">
            <Link to="/" className="btn btn-ghost text-lg ">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost text-lg">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
