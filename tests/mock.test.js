const test = require("tape");

test("tests are running!", (t) => {
    const x = 1;
    t.equal(x, 1, "Mock test is working");
    t.end();
});