// Checks whether the user is present on the request object.
// If not it should send a 401 HTML response with an error message

function checkAuth(req, res, next) {
	const user = req.user;
	if (!user) {
		res.status(401).send(`
        <h1>Please log in to view this page</h1>
        <a href="/log-in">Log in</a>
      `);
	} else {
		next();
	}
}

module.exports = checkAuth;
