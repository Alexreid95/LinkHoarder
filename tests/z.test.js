const test = require("tape");

// Fixes test duration
// now <1s, previously 10s
test.onFinish(() => process.exit(0));
