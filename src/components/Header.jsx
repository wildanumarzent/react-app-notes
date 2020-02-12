import React from "react";
import PropsType from "prop-types";
const Header = ({ showAddToggle, showAdd }) => {
  return (
    <section className="header">
      <button className="header-btn" onClick={showAddToggle}>
        {/* ini adalah operator ternary dimana artinya ini adalah if else */}
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.PropsType = {
  showAddToggle: PropsType.func.isRequired,
  showAdd: PropsType.bool.isRequired
};

export default Header;
