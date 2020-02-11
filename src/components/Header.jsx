import React from "react";
import PropsType from "prop-types";
const Header = ({ showAddToggle }) => {
  return (
    <section className="header">
      <button className="header-btn" onClick={showAddToggle}>
        Add
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.PropsType = {
  showAddToggle: PropsType.func.isRequired
};

export default Header;
