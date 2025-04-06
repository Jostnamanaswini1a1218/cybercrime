import React from "react";
import logo from "../../theme/assests/logo.png";
import '../../theme/components/header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <img src={logo} alt="logo" />
        <p className="head">Cyber threat</p>
        </div>
        <div className="right">
          <button className="btn">Login / Signup</button>
        </div>
        
      </div>
    </>
  );
};

export default Header;
