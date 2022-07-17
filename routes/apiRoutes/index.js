const router = require("express").Router();
const notes = require("../../data/db.json");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  notes.push(req.body);

  fs.writeFileSync(
    path.join(__dirname, "../../data/db.json"),
    JSON.stringify(notes, null, 2)
  );

  res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
  //gets copy of database
  let oldnotes = notes;

  //pulls object to be deleted from database
  const toDelete = oldnotes.filter((note) => note.id === req.params.id).pop();

  //get index of item to be removed
  const index = oldnotes.indexOf(toDelete);

  //removes note
  oldnotes.splice(index, 1);

  //updates database
  fs.writeFileSync(
    path.join(__dirname, "../../data/db.json"),
    JSON.stringify(notes, null, 2)
  );

  res.json(notes);
});

module.exports = router;
