const express = require("express");
require("dotenv").config();


const PORT = process.env.PORT || 3000;
const server = express();

// We start the server listening on a specific port
server.listen(PORT, () =>
    console.log(`Server listening on http:localhost:${PORT}`)
);