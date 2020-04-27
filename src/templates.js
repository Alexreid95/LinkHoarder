function sharedLayout(content) {
    return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>To-be-named</title>
        </head>
        <body>
            ${content}
        </body>
    </html>
    `;
}

function home() {
    const homeContent = /*html*/ `
    <h1>HOME</h1>
    `;

    return sharedLayout(homeContent);
}

module.exports = {
    home
}