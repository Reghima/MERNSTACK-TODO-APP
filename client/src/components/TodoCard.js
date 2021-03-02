import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./TodoCard.css";
import axios from "axios";

function TodoCard({ title, id, deleteTodo }) {
  const [activeInput, setActiveInput] = useState(false);
  const [input, setInput] = useState(`${title}`);

  const editTodo = () => {
    setActiveInput(!activeInput);
  };
  const saveTodo = (id, input) => {
    axios.put(`http://localhost:5000/todos/${id}`, { title: input });
    setActiveInput(!activeInput);
  };

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography
            variant='h5'
            component='h2'
            className={`edit-todo-${!activeInput ? "active" : "hidden"}`}
          >
            {title}
          </Typography>
          <input
            className={`edit-save-${activeInput ? "active" : "hidden"}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            variant='contained'
            color='primary'
            type='button'
            onClick={() => editTodo()}
            className={`edit-todo-${!activeInput ? "active" : "hidden"}`}
          >
            Edit
          </button>
          <button
            variant='contained'
            color='primary'
            type='button'
            className={`edit-save-${activeInput ? "active" : "hidden"}`}
            onClick={() => saveTodo(id, input)}
          >
            Save
          </button>

          <button
            variant='contained'
            color='secondary'
            onClick={() => deleteTodo(id)}
            className={`edit-todo-${!activeInput ? "active" : "hidden"}`}
          >
            Delete
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default TodoCard;
