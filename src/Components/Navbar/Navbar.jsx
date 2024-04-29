import React from "react";
import "./NavbarStyle.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Ecommerce</div>
      <div className="options">
        <div className="option">Shoes</div>
        <div className="option">Jeans</div>
        <div className="option">Jackets</div>
        <div className="option">T-Shirts</div>
        <div className="option">Shirts</div>
      </div>
    </div>
  );
};

export default Navbar;
