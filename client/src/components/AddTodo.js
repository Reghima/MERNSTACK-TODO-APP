import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./AddTodo.css";

function AddTodo() {
  const [title, setTitle] = useState("");

  const onChangeTodo = (e) => {
    setTitle(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = { title: title };
    axios.post("http://localhost:5000/todos", newTodo);
    console.log(newTodo);
    setTitle("");
  };

  return (
    <div>
      <TextField
        id='outlined-basic'
        label='add a new todo ..'
        variant='outlined'
        type='text'
        value={title}
        onChange={onChangeTodo}
      />
      <Button
        className='add-btn'
        variant='contained'
        disabled={!title}
        onClick={addNewTodo}
      >
        Add
      </Button>
    </div>
  );
}

export default AddTodo;
