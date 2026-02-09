const express = require("express");

const app = express();

app.use(express.json());

// Create an empty array
const notes = [];

// Create a notes...............
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note Created successfully",
  });
});

app.get("/notes", (req, res) => {
  // console.log(notes);
  res.status(200).json({
    message: "Notes Fetched Successfully",
    notes: notes,
  });
});

module.exports = app;
