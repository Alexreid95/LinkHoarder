const db = require("../db/connection");

// Creates the user, to be used at signUp
function createUser(user) {
	return db
		.query(
			"INSERT INTO users(username, email, user_password) VALUES($1, $2, $3) RETURNING *;",
			[user.username, user.email, user.password]
		)
		.then((res) => res.rows[0]);
}

// Gets a user by their email, to be used at login
function getUser(email) {
	return db
		.query("SELECT * FROM users WHERE email = ($1);", [email])
		.then((res) => {
			if (res.rows.length < 1)
				throw new Error(
					"Sorry, you don't have an account with us, please signup"
				);
			return res.rows[0];
		});
}

module.exports = {
	createUser,
	getUser,
};
