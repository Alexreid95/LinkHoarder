const templates = require("../templates");


function loginHandler(req, res) {
    const loginHtml = templates.login();
    res.send(loginHtml);
}

function signUpHandler(req, res) {
    const signUpHtml = templates.signUp();
    res.send(signUpHtml);
}

module.exports = {
    loginHandler,
    signUpHandler
}