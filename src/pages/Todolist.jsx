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

  const [showAdd, setshowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const showAddToggle = () => setshowAdd(!showAdd);
  console.log("showadd", showAdd);
  return (
    <Paper>
      <Header showAddToggle={showAddToggle} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default Todolist;
