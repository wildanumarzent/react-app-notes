import React from "react";

import PropsType from "prop-types";
import Todo from "./todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

Todos.propsType = {
  todos: PropsType.arrayOf(
    PropsType.shape({
      text: PropsType.string
    })
  )
};

export default Todos;
