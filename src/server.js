const express = require("express");
const genericHandlers = require("./handlers/genericHandlers.js");
const userHandlers = require("./handlers/userHandlers.js");


require("dotenv").config();
const PORT = process.env.PORT || 3000;
const server = express();


// Routes
server.get("/", genericHandlers.homeHandler)
server.get("/log-in", userHandlers.loginHandler)
server.get("/sign-up", userHandlers.signUpHandler)








// We start the server listening on a specific port
server.listen(PORT, () =>
    console.log(`Server listening on http:localhost:${PORT}`)
);