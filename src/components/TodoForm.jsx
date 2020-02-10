import React, { useState } from "react";
import PropTypes from "prop-types";
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("no blank todo");
      return;
    }
    addTodo(value);
    alert(value);
    setValue("");
  };
  console.log(value);
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
};
TodoForm.propTypes = {
  addtodo: PropTypes.func.isRequired
};
export default TodoForm;
