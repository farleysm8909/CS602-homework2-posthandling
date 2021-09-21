import express from "express";

const router = express.Router();

router.post("/test", (req, resp) => {
    console.log(req.body);
    let output = "<ul>";
    Object.keys(req.body).forEach(key => {
        output += `<li>${key} = ${req.body[key]}</li>`;
    });
    output += "</ul>";
    resp.status(200).send(`<p>The following data was received by the server:</p>\n${output}`);
});

router.get("/test", (req, resp) => {
    resp.status(200).send(`<h1>Homework 2: POST Handling</h1><p>Use PostMan Desktop Agent to test the POST endpoint at localhost:2000/homework/test by sending some JSON to the server via the body.</p>`);
});

// original code
// router.get("/test", (req, resp) => {
//     // work done here
//     resp.status(200).send("this is not complete");
// });

export {router as exampleRoute};