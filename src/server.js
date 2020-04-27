const express = require("express");

const server = express();

// We start the server listening on a specific port
server.listen(3000, () =>
    console.log("Server listening on http:localhost:3000")
)