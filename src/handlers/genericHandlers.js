const templates = require("../templates");

function homeHandler(req, res) {
    const userName = req.cookies.userName;
    const homeHtml = templates.home(userName);
    res.send(homeHtml);
}

module.exports = {
    homeHandler
}