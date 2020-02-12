import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");
  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("no blank todo");
      return;
    }

    if (value.length > 40) {
      alert("karakter jangan lebih dari 40");
      setValue("");
      return;
    }

    addTodo(value);
    // alert(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="add">
        <form className="add-form" action="" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="add-btn">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};
TodoForm.propTypes = {
  addtodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
