const express = require("express");
const db = require("../data/db.js");

// add require for post.model.js later

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  const postData = req.body;
  db.insert(postData);
  try {
    if (postData.title && postData.contents) {
        res.status(201).json(postData)
    }
  } catch (err) {
    res.status(500).json({ message: "Error: ", err });
  }
});

router.delete(":/id", (req, res) => {});

router.put(":/id", (req, res) => {});

module.exports = router;
