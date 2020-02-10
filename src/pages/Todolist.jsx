import React, { useState } from "react";
// import "./styles.css";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "elearning" },
    { text: "learning react hooks" },
    { text: "learning style in react" }
  ]);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };
  console.log("todos", todos);
  return (
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default Todolist;
