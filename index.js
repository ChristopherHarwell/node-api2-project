const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Chris's API</h2>
    <p>Welcome to Chris's API</p>
 `);
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log('\n*** Server Running on http://localhost:5000 ***\n')
})
