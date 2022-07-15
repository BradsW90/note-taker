const router = require("express").Router();
const notes = require("../../data/db.json");

router.get("/notes", (req, res) => {
  res.json(notes);
});

module.exports = router;
