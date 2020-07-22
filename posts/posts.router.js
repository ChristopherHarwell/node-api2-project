const express = require("express");

// add require for post.model.js later

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});


/**
 * 
 * When the client makes a POST request to /api/posts:

If the request body is missing the title or contents property:

cancel the request.
respond with HTTP status code 400 (Bad Request).
return the following JSON response: { errorMessage: "Please provide title and contents for the post." }.
If the information about the post is valid:

save the new post to the database.
return HTTP status code 201 (Created).
return the newly created post.
If there's an error while saving the post:

cancel the request.
respond with HTTP status code 500 (Server Error).
return the following JSON object: { error: "There was an error while saving the post to the database" }.
 
 * */  
router.post("/", (req, res) => {
    const postInfo = req.body;

    // function that checks the database to authenticate the ID
    // by checking the body of the data being sent to the database
    // then it returns a promise with a status of 201 in the form of 
    // json using .json(). The params for .json() are an object with 
    // with the shape of:
    // {data: <parameter for the .then() method this code block lives inside>}

});

router.delete(":/id", (req, res) => {});

router.put(":/id", (req, res) => {});
