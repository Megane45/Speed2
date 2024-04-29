import logo from "../assets/logom3.jpg";
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <img src={logo} alt="Logo de mon site" />
      <h1>MegFlix</h1>
      <section className="recherche-filter">
        <label htmlFor="description">
          Barre de recherche:
          <input type="text" id="description" />
        </label>
      </section>
    </header>
  );
}

export default NavBar;
