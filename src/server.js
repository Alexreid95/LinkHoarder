const express = require("express");
const genericHandlers = require("./handlers/genericHandlers.js");
const userHandlers = require("./handlers/userHandlers.js");

const cookieParser = require("cookie-parser");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const server = express();

// Enabled for all routes
server.use(express.urlencoded());
server.use(cookieParser());



// Routes
// ------- Generic handlers -------
server.get("/", genericHandlers.homeHandler);

// ------- User handlers -------
// Renders templates html which contains a form
server.get("/log-in", userHandlers.getLoginHandler);
server.get("/sign-up", userHandlers.getSignUpHandler);
server.get("/log-out", userHandlers.getLogoutHandler);

// Parses the request body to receive the user's submitted info
server.post("/log-in", userHandlers.postLoginHandler);
server.post("/sign-up", userHandlers.postSignUpHandler);







// We start the server listening on a specific port
server.listen(PORT, () =>
    console.log(`Server listening on http:localhost:${PORT}`)
);