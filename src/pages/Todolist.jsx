import React, { useState } from "react";
// import "./styles.css";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
const Todolist = () => {
  const [todos, seTodos] = useState([
    { text: "elearning" },
    { text: "learning react hooks" },
    { text: "learning style in react" }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default Todolist;
