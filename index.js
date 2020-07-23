const express = require("express");
const server = express();

const postsRouter = require("./posts/posts.router.js");

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Chris's API</h2>
    <p>Welcome to Chris's API</p>
 `);
});

server.use('/api/posts', postsRouter);

const PORT = 5000;
server.listen(PORT, () => {
    console.log('\n*** Server Running on http://localhost:5000 ***\n')
});
