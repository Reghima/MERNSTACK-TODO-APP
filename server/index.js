const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const router = require("./routes/crud");

app.use(bodyParser.json());
app.use(cors());
app.use("/todos", router);

const PORT = process.env.PORT || 5000;
require("dotenv").config();
mongoose.connect(process.env.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(PORT, (err) => {
  if (err) return err;
  console.log(`Server is running on port http://localhost:${PORT}`);
});
