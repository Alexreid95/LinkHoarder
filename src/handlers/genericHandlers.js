const templates = require("../templates");

function homeHandler(req, res) {
	const username = req.cookies.userName;
	const homeHtml = templates.home(username);
	res.send(homeHtml);
}

function missingHandler(req, res) {
	const missingHtml = templates.missing();
	res.send(missingHtml);
}

module.exports = {
	homeHandler,
	missingHandler,
};
