const router = require("express").Router();
let note = require("../models/notes.model");

router.route("/").get((req, res) => {
  note
    .find()
    .then((notes) => res.json(notes))
    .catch((err) => res.json("Error:" + err));
});
