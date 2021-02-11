const express = require("express");
const router = express.Router();

const { Todo } = require("../model/Todo");

//create todo
router.post("/", (req, res) => {
  const todo = new Todo(req.body);
  todo.save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ data: doc });
  });
});
//read all todos
router.get("/", (req, res) => {
  Todo.find({}, (err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ data: doc });
  });
});
// read todo by id
router.get("/:id", (req, res) => {
  Todo.find({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(400).json({ err });
    res.status(200).json({ data: doc });
  });
});
//update todo
router.put("/:id", (req, res) => {
  Todo.findOneAndUpdate({ _id: req.params.id }, req.body, (err, doc) => {
    if (err) return res.status(400).json({ err });
    res.status(200).send(`${doc.title} is updated`);
  });
});
//delete todo
router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(400).json({ err });
    res.status(200).send(`${doc.title} is removed`);
  });
});

module.exports = router;
