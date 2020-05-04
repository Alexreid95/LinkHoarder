const templates = require("../templates");
const userModel = require("../model/userModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const secret = process.env.JW_SECRET;


function getLoginHandler(req, res) {
    const loginHtml = templates.login();
    res.send(loginHtml);
}

function getSignUpHandler(req, res) {
    const signUpHtml = templates.signUp();
    res.send(signUpHtml);
}

function getLogoutHandler(req, res) {
    res.clearCookie("userId");
    res.clearCookie("userName");
    res.clearCookie("token");

    res.redirect("/");
}

function postLoginHandler(req, res, next) {
    if (
        req.body.email === undefined ||
        req.body.password === undefined
    ) {
        const errorMessage = new Error("Missing parameter: BOTH email and password are REQUIRED");
        errorMessage.status = 400;
        next(errorMessage);
    }
    userModel
        .getUser(req.body.email)
        .then(userInDB => {
            return bcrypt.compare(req.body.password, userInDB.user_password)
                .then(bool => {
                    if (!bool) throw new Error("I don't like this password...");

                    const payload = {
                        user_id: userInDB.id
                    };

                    const token = jwt.sign(payload, secret, {
                        expiresIn: "12h"
                    })

                    userInDB.access_token = token;

                    res.cookie("userId", userInDB.id, {
                        maxAge: 6000000
                    });
                    res.cookie("userName", userInDB.username, {
                        maxAge: 6000000
                    });
                    res.cookie("token", userInDB.access_token, {
                        maxAge: 6000000
                    });

                    res.redirect("/");

                })
        })
        .catch(next)

}

function postSignUpHandler(req, res, next) {
    if (
        req.body.username === undefined ||
        req.body.email === undefined ||
        req.body.password === undefined
    ) {
        const errorMessage = new Error("Missing parameter: username, email, password are REQUIRED");
        errorMessage.status = 400;
        next(errorMessage);
    }

    const newUserName = req.body.username;
    const newUserEmail = req.body.email;
    const rawUserPassword = req.body.password;

    bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(rawUserPassword, salt))
        .then(saltedPassword => {
            const newUser = {
                username: newUserName,
                email: newUserEmail,
                password: saltedPassword
            };
            userModel
                .createUser(newUser)
                .then(user => {
                    const payload = {
                        user_id: user.id
                    }

                    const token = jwt.sign(payload, secret, {
                        expiresIn: "2h"
                    });

                    user.access_token = token;


                    res.cookie("userId", user.id, {
                        maxAge: 6000000
                    });
                    res.cookie("userName", user.username, {
                        maxAge: 6000000
                    });
                    res.cookie("token", user.access_token, {
                        maxAge: 6000000
                    });

                    res.redirect("/");
                })
                .catch(next)
        })
        .catch(next)
}

module.exports = {
    getLoginHandler,
    getSignUpHandler,
    getLogoutHandler,
    postLoginHandler,
    postSignUpHandler
}