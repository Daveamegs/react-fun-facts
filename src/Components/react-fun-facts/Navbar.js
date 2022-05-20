import React from "react";
import Logo from "../../images/react-icon-small.png";

function Navbar() {
  return (
    <header className="nav-area container">
      <nav className="nav-item">
        <div className="nav-logo">
          <img src={Logo} alt="React Logo" className="react-logo" />
          <h3 className="text-react-facts">ReactFacts</h3>
        </div>

        <h3 className="text-react-course">React Course - Project 1</h3>
      </nav>
    </header>
  );
}

export default Navbar;
