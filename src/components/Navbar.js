import React from "react";
import reactLogo from './../logo.svg';
export default function Navbar() {
  return (
    <header>
      <nav className="Navbar">
        <div className="NavLogo">
          <img src={reactLogo} alt="logo"/>
          <h2>ReactFacts</h2>
        </div>
        <div className="NavText">
            <h3>React Course - Project 1</h3>
        </div>
      </nav>
    </header>
  );
}
