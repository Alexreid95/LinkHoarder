const templates = require("../templates");

function homeHandler(req, res) {
    const username = req.cookies.userName;
    const homeHtml = templates.home(username);
    res.send(homeHtml);
}

module.exports = {
    homeHandler
}