const express = require("express");
const db = require("../data/db.js");
const { findById } = require("../data/db.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.find()
    .then((post) => {
      res.status(201).json({ data: post });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    findById(id).then(([item]) => {
      if (item === undefined) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      } else {
        res.status(201).json({ data: item });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "The post information could not be retrieved." });
  }
});

router.get("/:id/comments", (req, res) => {});

router.post("/", (req, res) => {
  const postData = req.body;
  db.insert(postData);
  try {
    if (postData.title && postData.contents) {
      res.status(201).json(postData);
    } else {
      res.status(400).json({
        errorMessage: "Please provide title and contents for the post.",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Error: ", err });
  }
});

router.delete(":/id", (req, res) => {});

router.put(":/id", (req, res) => {});

module.exports = router;
