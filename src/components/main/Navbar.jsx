import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="mr-4" to="/">Home</Link>
      <Link className="mr-4" to="/about">About</Link>
      <Link className="" to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
