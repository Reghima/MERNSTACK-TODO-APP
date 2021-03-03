import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";

function TodoList({ todos, setTodos }) {
  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then(function (res) {
        const { data } = res.data;
        setTodos([...data]);
        // console.log(todos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then((res) => {
        console.log(res);
        const newTodos = todos.filter((todo) => todo._id !== id);
        setTodos(newTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          id={todo._id}
          title={todo.title}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
