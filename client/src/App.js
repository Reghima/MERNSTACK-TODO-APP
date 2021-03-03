import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <h1 className='my-todo-app'>TODO APP</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
