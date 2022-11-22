import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center w-100 mx-3 h-12 bg-slate-100">
        <h1 className="nav-logo">Content Manager</h1>
        <ul className="flex">
          <li className="mr-4">Home</li>
          <li className="mr-4">Examples</li>
          <li>Features</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
