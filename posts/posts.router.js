const express = require("express");
const {
  insert,
  find,
  findById,
  insertComment,
  findCommentById,
  remove,
  findPostComments
} = require("../data/db.js");

const router = express.Router();

router.get("/", (req, res) => {
  find()
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

// Returns an array of all the comment
// objects associated with the post with the specified id.
//TODO test this after making a post request that adds comments
router.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  try {
    findCommentById(id).then((comment) => {
      res.status(201).json({ data: comment });
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "The post information could not be retrieved." });
  }
});

router.post("/", (req, res) => {
  const postData = req.body;
  insert(postData);
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

// Creates a comment for the post with the specified
// id using information sent inside of the request body.

/**
 * insertComment(): calling insertComment while passing 
 * it a comment object will add it to the database and 
 * return a promise that resolves to an object with the 
 * id of the inserted comment. The object looks like this: 
 * { id: 123 }. This method will throw an error if the post
 * _id field in the comment object does not match a valid 
 * post id in the database.

*/

// TODO finish the POST request for :id/comments
router.post("/:id/comments", (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  const { text } = req.body;

  if (!text) {
    res
      .status(400)
      .json({ errorMessage: "Please provide text for the comment" });
  } else if (text) {
    findById(id).then((post) => {
      if (post.length === 0) {
        res.status(404).json({
          errorMessage: "The post with the specified ID does not exist.",
        });
      } else if (post.length === 1) {
        insertComment(comment)
          .then((commentId) => {
            findPostComments(id).then((post) => {
              if (post.length > 0) {
                res.status(201).json({data: comment});
              } else {
                res.status(500).json({
                  errorMessage:
                    "There was an error while saving the comment to the database.",
                });
              }
            });
          })
          .catch((err) => console.log(err));
      }
    });
  }
});

// Removes the post with the specified id and returns the deleted
// post object. You may need to make additional calls to the
// database in order to satisfy this requirement.

// TODO finish the DELETE request for :/id
router.delete(":/id", (req, res) => {
  const { id } = req.params;

  findById(id)
    .remove(id)
    .then((post) => {
      status(200).json(id);
    });
});

// TODO finish the PUT request for :/id
router.put(":/id", (req, res) => {});

module.exports = router;
