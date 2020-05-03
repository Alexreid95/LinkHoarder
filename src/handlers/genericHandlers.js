const templates = require("../templates");

function homeHandler(req, res) {
    const homeHtml = templates.home();
    res.send(homeHtml);
}

module.exports = {
    homeHandler
}