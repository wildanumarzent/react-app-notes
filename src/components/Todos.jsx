import React from "react";

import PropsTypes from "prop-types";
import Todo from "./todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo.text} />;
      })}
    </section>
  );
};

Todos.propsType = {
  todos: PropsTypes.arrayOf(
    PropsTypes.shape({
      text: PropsTypes.string
    })
  )
};

export default Todos;
