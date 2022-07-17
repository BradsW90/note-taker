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

module.exports = router;
