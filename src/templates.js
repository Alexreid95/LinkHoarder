function sharedLayout(headerContent, navContent, mainContent) {
	return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Link Hoarder</title>
        </head>
        <body>
            ${navContent}
            ${headerContent}
            ${mainContent}
            <footer></footer>
        </body>
    </html>
    `;
}

function home(username) {
	// When logged out show:
	const homeHeaderContentOut = /*html*/ `
    <header> 
        <h1>Link Hoarder</h1>
    </header>
    `;

	const homeNavContentOut = /*html*/ `
    <nav class="nav_links">
        <a href="/log-in" class="nav_links_a" aria-label="log-in">Login</a>
        <a href="/sign-up" class="nav_links_a" aria-label="sign-up">SignUp</a>
    </nav>

    `;

	const homeMainContentOut = /*html*/ `
    <main class="home-main">
        <h3>Home, logged out main Section</h3>
    </main>
    `;

	// When logged in show:
	const homeHeaderContentIn = /*html*/ `
    <header> 
        <h1>Hi ${username}</h1>
    </header>
    `;

	const homeNavContentIn = /*html*/ `
    <nav class="nav_links">
        <a href="/log-out" class="nav_links_a" aria-label="log-out">Logout</a>
    </nav>
    `;

	const homeMainContentIn = /*html*/ `
    <main class="home-main">
        <h3>Home, logged in Main Section</h3>
    </main>
    `;

	if (username) {
		// logged in
		return sharedLayout(
			homeHeaderContentIn,
			homeNavContentIn,
			homeMainContentIn
		);
	} else {
		//logged out
		return sharedLayout(
			homeHeaderContentOut,
			homeNavContentOut,
			homeMainContentOut
		);
	}
}

function missing() {
	const missingHeaderContent = /*html*/ `
    <header> 
        <h1>Missing Page</h1>
    </header>
    `;

	const missingNavContent = /*html*/ `
    <nav class="nav_links">
        <a href="/" class="nav_links_a" aria-label="home">Home</a>
    </nav>
    `;

	const missingMainContent = /*html*/ `
    <main class="home-main">
        <h3>Error 404, Cant find page</h3>
    </main>
    `;

	return sharedLayout(
		missingHeaderContent,
		missingNavContent,
		missingMainContent
	);
}

function login() {
	const loginHeaderContent = /*html*/ `
    <header> 
        <h1>Login Page</h1>
    </header>
    `;

	const loginNavContent = /*html*/ `
    <nav class="nav_links">
        <a href="/" class="nav_links_a" aria-label="home">Home</a>
    </nav>
    `;

	const loginMainContent = /*html*/ `
    <main class="form-wrap">
        <form class="form login-form" action="/log-in" method="POST">
            <fieldset>
                <legend>Login Form</legend>
                <label for="email">
                  <input type="email" id="email" name="email" placeholder="Email" aria-label="email" required>
                </label>

                <label for="password">
                  <input type="password" id="password" name="password" placeholder="Password" aria-label="password" required> 
                </label>

               <button class="submit-btn" type="submit">Login now!</button>
            </fieldset>
        </form>
    </main>
    `;

	return sharedLayout(loginHeaderContent, loginNavContent, loginMainContent);
}

function signUp() {
	const signUpHeaderContent = /*html*/ `
    <header> 
        <h1>SignUp Page</h1>
    </header>
    `;

	const signUpNavContent = /*html*/ `
    <nav class="nav_links">
        <a href="/" class="nav_links_a" aria-label="home">Home</a>
    </nav>
    `;

	const signUpMainContent = /*html*/ `
    <main class="form-wrap">
        <form class="form signup-form" action="/sign-up" method="POST">
            <fieldset>
                <legend>SignUp Form</legend>
                <label for="username">
                  <input type="text" id="username" name="username" placeholder="Username" aria-label="username" required>
                </label>
                <label for="email">
                  <input type="email" id="email" name="email" placeholder="Email" aria-label="email" required>
                </label>
                <label for="password">
                  <input type="password" id="password" name="password" placeholder="Password" aria-label="password" required> 
                </label>
                <button class="submit-btn" type="submit">Signup Now!</button>
            </fieldset>
        </form>
    </main>
    `;

	return sharedLayout(
		signUpHeaderContent,
		signUpNavContent,
		signUpMainContent
	);
}

function signUpSuccess(username) {
	const signUpSuccessHeaderContent = /*html*/ `
  <header> 
      <h1>Link Hoarder</h1>
  </header>
  `;

	const signUpSuccessNavContent = /*html*/ `
  <nav class="nav_links">
      <a href="/" class="nav_links_a" aria-label="home">Home</a>
      <a href="/log-out" class="nav_links_a" aria-label="log-out">Logout</a>
  </nav>
  `;

	const signUpSuccessMainContent = /*html*/ `
  <main class="success-message">
      <p>Thanks ${username}! Your account has been successfully created.</p>
  </main>
  `;

	return sharedLayout(
		signUpSuccessHeaderContent,
		signUpSuccessNavContent,
		signUpSuccessMainContent
	);
}

module.exports = {
	home,
	missing,
	login,
	signUp,
	signUpSuccess,
};
