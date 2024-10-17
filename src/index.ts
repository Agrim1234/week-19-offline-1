import express from "express";

const app = express();

let requestCount = 0;

app.use(
    function middleware(req, res, next) {
        requestCount++;
        next();
    }
)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get( "/requestCount", (req, res) => {
    res.json({
        requestCount});

})

app.listen(3000);