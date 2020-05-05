const server = require("../src/server");
const build = require("../src/db/build");

const supertest = require("supertest");
const test = require("tape");


test("Route tests are running!", t => {
    const x = 2;
    t.equal(x, 2, "Routes initial test is working");
    t.end();
});

test("Test / get route", t => {
    build()
        .then(() => {
            supertest(server)
                .get("/")
                .expect(200)
                .expect("content-type", "text/html; charset=utf-8")
                .end((err, res) => {
                    t.error(err, "Status is 200 and content-type is text/html; charset=utf-8");
                    t.equals(res.text.includes("<h1>Link Hoarder</h1>"), true, "<h1>HOME</h1> should be present");
                    t.end();
                });
        })
})

test("Test /sign-up get route", t => {
    build()
        .then(() => {
            supertest(server)
                .get("/sign-up")
                .expect(200)
                .expect("content-type", "text/html; charset=utf-8")
                .end((err, res) => {
                    t.error(err, "Status is 200 and content-type is text/html; charset=utf-8");
                    t.equals(res.text.includes('class="form signup-form"'), true, "Signup form should be present");
                    t.end();
                });
        })
})

test("Test /log-in get route", t => {
    build()
        .then(() => {
            supertest(server)
                .get("/log-in")
                .expect(200)
                .expect("content-type", "text/html; charset=utf-8")
                .end((err, res) => {
                    t.error(err, "Status is 200 and content-type is text/html; charset=utf-8");
                    t.equals(res.text.includes('class="form login-form"'), true, "Login form should be present");
                    t.end();
                });
        })
})

// test("Test /sign-up post route", t => {
//     build()
//         .then(() => {
//             supertest(server)
//                 .post("/sign-up")
//                 .expect("content-type", "application/json; charset=utf-8")
//                 .expect(201)
//                 .then((req, res) => {
//                     assert(res.body.username, "she-ra")
//                 })



//                 .end((err, res) => {
//                     t.error(err);
//                     t.equals(typeof res.body, "object", "Check an Object is returned");
//                     t.equals(res.body.username, "she-ra", "Username should be she-ra");
//                     t.equals(res.body.token, true, "Check that a token exists");
//                     t.end();
//                 });
//         });
// });