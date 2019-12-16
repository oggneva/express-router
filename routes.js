const router = require("express").Router();

router.get("/", (req, res) => {
    res.send(`greetings from ${req.path}`);
});

router.get("/otherroute", (req, res) => {
    res.send(`greetings from ${req.path}`);
});

router.get("/anotherroute", (req, res) => {
    res.send(`greetings from ${req.path}`);
});

module.exports = router;