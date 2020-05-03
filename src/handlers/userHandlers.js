const templates = require("../templates");


function getLoginHandler(req, res) {
    const loginHtml = templates.login();
    res.send(loginHtml);
}

function getSignUpHandler(req, res) {
    const signUpHtml = templates.signUp();
    res.send(signUpHtml);
}

// function postLoginHandler(req, res) {

// }

// function postSignUpHandler(req, res) {

// }

module.exports = {
    getLoginHandler,
    getSignUpHandler
    // postLoginHandler,
    // postSignUpHandler
}