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

// DELETE Request.....................
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];

  // Frontend se rasponse server pe ja raha hai...
  res.status(200).json({
    message: "Note Delete Successfully",
  });
});

module.exports = app;
