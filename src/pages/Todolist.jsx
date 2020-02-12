import React, { useState } from "react";
// import "./styles.css";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "elearning", isCompleted: false },
    { text: "learning react hooks", isCompleted: false },
    { text: "learning style in react", isCompleted: false }
  ]);

  const [showAdd, setshowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("only 10 todos is allowed");
    }
  };
  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const showAddToggle = () => setshowAdd(!showAdd);
  console.log("todos", todos);
  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default Todolist;
