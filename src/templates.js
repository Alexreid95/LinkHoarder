function sharedLayout(headerContent, navContent, mainContent) {
    return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Link Hoarder</title>
        </head>
        <body>
            <header>${headerContent}</header>
            <nav>${navContent}</nav>
            <main>${mainContent}</main>
            <footer></footer>
        </body>
    </html>
    `;
}

function home(username) {
    // When logged out show:
    const homeHeaderContentOut = /*html*/ `
    <h1>HOME</h1>
    `;

    const homeNavContentOut = /*html*/ `
    <a href="/log-in" class="nav_links" aria-label="log-in">Login</a>
    <a href="/sign-up" class="nav_links" aria-label="sign-up">SignUp</a>
    `;

    const homeMainContentOut = /*html*/ `
    <h3>Home, logged out main Section</h3>
    `;

    // When logged in show:
    const homeHeaderContentIn = /*html*/ `
    <h1>Welcome back ${username}</h1>
    `;

    const homeNavContentIn = /*html*/ `
    <a href="/log-out" class="nav_links" aria-label="log-out">Logout</a>
    `;

    const homeMainContentIn = /*html*/ `
    <h3>Home, logged in Main Section</h3>
    `;

    if (username) {
        // logged in 
        return sharedLayout(homeHeaderContentIn, homeNavContentIn, homeMainContentIn);

    } else {
        //logged out 
        return sharedLayout(homeHeaderContentOut, homeNavContentOut, homeMainContentOut);
    }

}

function login() {
    const loginHeaderContent = /*html*/ `
    <h1>Login Page</h1>
    `;

    const loginNavContent = /*html*/ `
    <a href="/" class="nav_links" aria-label="home">Home</a>
    `;

    const loginMainContent = /*html*/ `
    <h3>Login Form</h3>
    <form class="login-form" action="/log-in" method="POST">
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="hello@gmail.com?" required>

        <label for="password">Password: </label>
        <input type="password" id="password" name="password" placeholder="password123" required> 

        <button class="submit-btn" type="submit">Login now!</button>
    </form>
    `;

    return sharedLayout(loginHeaderContent, loginNavContent, loginMainContent);
}

function signUp() {
    const signUpHeaderContent = /*html*/ `
    <h1>SignUp Page</h1>
    `;

    const signUpNavContent = /*html*/ `
    <a href="/" class="nav_links" aria-label="home">Home</a>
    `;

    const signUpMainContent = /*html*/ `
    <h3>SignUp Form</h3>
        <form class="signup-form" action="/sign-up" method="POST">

        <label for="username">Username: </label>
        <input type="text" id="username" name="username" placeholder="Username123" required>

        <label for="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="hello@gmail.com?" required>

        <label for="password">Password: </label>
        <input type="password" id="password" name="password" placeholder="password123" required> 

        <button class="submit-btn" type="submit">Signup Now!</button>
  </form>
    `;

    return sharedLayout(signUpHeaderContent, signUpNavContent, signUpMainContent);
}

module.exports = {
    home,
    login,
    signUp
}