const test = require("tape");

test("Mock test is running!", (t) => {
    const x = 1;
    t.equal(x, 1, "Mock test is working");
    t.end();
});