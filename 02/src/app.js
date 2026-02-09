const express = require("express");

const app = express();

const notes = [];

// Create a notes...............
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note Created successfully",
  });
});

module.exports = app;
