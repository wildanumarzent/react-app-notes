import React from "react";

import PropsTypes from "prop-types";
import Todo from "./todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            text={todo.text}
            isCompleted={todo.isCompleted}
            completeTodo={completeTodo}
            index={index}
          />
        );
      })}
    </section>
  );
};

Todos.propsType = {
  todos: PropsTypes.arrayOf(
    PropsTypes.shape({
      text: PropsTypes.string
    })
  ),
  completeTodo: PropsTypes.func.isRequired
};

export default Todos;
