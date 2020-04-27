function sharedLayout(headerContent, navContent, mainContent) {
    return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>To-be-named</title>
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

function home() {
    const homeHeaderContent = /*html*/ `
    <h1>HOME</h1>
    `;

    const homeNavContent = /*html*/ `
    <a href="/log-in" class="nav_links" aria-label="log-in">Login</a>
    <a href="/sign-up" class="nav_links" aria-label="sign-up">SignUp</a>
    `;

    const homeMainContent = /*html*/ `
    <h3>Home Main Section</h3>
    `;

    return sharedLayout(homeHeaderContent, homeNavContent, homeMainContent);
}

function login() {
    const loginHeaderContent = /*html*/ `
    <h1>Login Page</h1>
    `;

    const loginNavContent = /*html*/ `
    <a href="/" class="nav_links" aria-label="home">Home</a>
    `;

    const loginMainContent = /*html*/ `
    <h3>Login Main Section</h3>
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
    <h3>SignUp Main Section</h3>
    `;

    return sharedLayout(signUpHeaderContent, signUpNavContent, signUpMainContent);
}

module.exports = {
    home,
    login,
    signUp
}