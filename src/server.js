const express = require("express");
const genericHandlers = require("./handlers/genericHandlers.js");
const userHandlers = require("./handlers/userHandlers.js");

const cookieParser = require("cookie-parser");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const server = express();

// Enabled for all routes
server.use(express.urlencoded());
// server.use(express.json());
server.use(cookieParser());
server.use(express.static("./public"));

// Routes
// ------- Generic handlers -------
// Renders template html
server.get("/", genericHandlers.homeHandler);
// server.get("default", genericHandlers.missingHandler);

// ------- User handlers -------
// Renders template html
server.get("/log-in", userHandlers.getLoginHandler);
server.get("/sign-up", userHandlers.getSignUpHandler);
server.get("/log-out", userHandlers.getLogoutHandler);
server.get("/sign-up-success", userHandlers.getSignUpSuccessHandler);

// Parses the request body to receive the user's submitted info
server.post("/log-in", userHandlers.postLoginHandler);
server.post("/sign-up", userHandlers.postSignUpHandler);

// npm test => When PGDATABASE=localtest, we are testing, server does not need to be running
if (process.env.PGDATABASE !== "localtest") {
	// We start the server listening on a specific port
	server.listen(PORT, () =>
		console.log(`Server listening on http:localhost:${PORT}`)
	);
}

module.exports = server;
